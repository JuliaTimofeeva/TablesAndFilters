import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DataService} from "../data.service";

@Component({
  selector: 'app-table-text-fields',
  templateUrl: './table-text-fields.component.html',
  styleUrls: ['./table-text-fields.component.css'],
  providers: [DataService]
})
export class TableTextFieldsComponent {

  public dataSource;
  constructor(private dataService: DataService) {
    this.dataService.getPeople().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }
  displayedColumns: string[] = ['number', 'name', 'surname', 'age'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
