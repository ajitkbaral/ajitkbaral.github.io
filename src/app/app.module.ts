import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EasyPieChartModule } from "ng2modules-easypiechart";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, EasyPieChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
