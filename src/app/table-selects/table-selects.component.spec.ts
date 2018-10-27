import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectsComponent } from './table-selects.component';

describe('TableSelectsComponent', () => {
  let component: TableSelectsComponent;
  let fixture: ComponentFixture<TableSelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
