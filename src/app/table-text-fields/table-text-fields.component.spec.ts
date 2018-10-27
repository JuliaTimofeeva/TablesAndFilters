import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTextFieldsComponent } from './table-text-fields.component';

describe('TableTextFieldsComponent', () => {
  let component: TableTextFieldsComponent;
  let fixture: ComponentFixture<TableTextFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTextFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTextFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
