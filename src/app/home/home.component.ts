import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public skills = [
    {
      name: "Java",
      percent: 90
    },
    {
      name: "Python",
      percent: 80
    },
    {
      name: "JavaScript",
      percent: 75
    },
    {
      name: "Swift",
      percent: 68
    },
    {
      name: "Database",
      percent: 80
    },
    {
      name: "HTML",
      percent: 90
    },
    {
      name: "CSS",
      percent: 75
    }
  ];
  public options: any;

  constructor() {}

  ngOnInit() {}
}
