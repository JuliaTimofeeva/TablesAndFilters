import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DataService } from "../data.service";

export interface PeriodicElement {
  model: string;
  number: number;
  price: number;
}

export const CONDITIONS_LIST = [
  { value: "is-equal", label: "Is equal" },
  { value: "is-not-equal", label: "Is not equal" }
];

export const CONDITIONS_FUNCTIONS = {
  "is-equal": function (value, filterdValue) {
    return value == filterdValue;
  },
  "is-not-equal": function (value, filterdValue) {
    return value != filterdValue;
  }
};

@Component({
  selector: 'app-table-selects',
  templateUrl: './table-selects.component.html',
  styleUrls: ['./table-selects.component.css'],
  providers: [DataService]
})
export class TableSelectsComponent {
  public displayedColumns: string[] = ["number", "model", "price"];
  public dataSource;

  public conditionsList = CONDITIONS_LIST;
  public searchValue: any = {};
  public searchCondition: any = {};
  private _filterMethods = CONDITIONS_FUNCTIONS;

  constructor(private dataService: DataService) {
    this.dataService.getPrice().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.search();
    });
  }

  private search() {
    this.dataSource.filterPredicate = (p: PeriodicElement, filtre: any) => {
      let result = true;
      let keys = Object.keys(p);

      for (const key of keys) {
        let searchCondition = filtre.conditions[key];

        if (searchCondition && searchCondition !== 'none') {
          if (filtre.methods[searchCondition](p[key], filtre.values[key]) === false) {
            result = false;
            break;
          }
        }
      }

      return result
    };
  }

  applyFilter() {

    let searchFilter: any = {
      values: this.searchValue,
      conditions: this.searchCondition,
      methods: this._filterMethods
    }

    this.dataSource.filter = searchFilter;
  }

  clearColumn(columnKey: string): void {
    this.searchValue[columnKey] = null;
    this.searchCondition[columnKey] = 'none0';
    this.applyFilter();
  }
}
