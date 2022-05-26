import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RegistrationListComponent} from "./registration-list/registration-list.component";
import {RegirationItemComponent} from  "./registration-list/regiration-item/regiration-item.component"

@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    RegirationItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
