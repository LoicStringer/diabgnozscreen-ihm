import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationService } from './services/pagination.service';
import { PaginationToolComponent } from './pagination-tool/pagination-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	PaginationService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
