import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {AppComponent} from "./app.component";
import {TableTextFieldsComponent} from "./table-text-fields/table-text-fields.component";
import { TableSelectsComponent } from './table-selects/table-selects.component';
import {FilterItemDirective} from "./filter-item.directive";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [TableTextFieldsComponent, TableSelectsComponent],
  declarations: [AppComponent, TableTextFieldsComponent, TableSelectsComponent, FilterItemDirective],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
