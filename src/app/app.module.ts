import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EasyPieChartModule } from "ng2modules-easypiechart";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, EasyPieChartModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
