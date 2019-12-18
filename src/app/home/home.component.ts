import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public currentMenu;
  public menuItems = [
    "Home",
    "About",
    "Portfolio",
    "Skills",
    "Personal works",
    "Contact"
  ];
  @ViewChild("home")
  public home: ElementRef;
  @ViewChild("about")
  public about: ElementRef;
  @ViewChild("portfolio")
  public portfolio: ElementRef;
  @ViewChild("mySkills")
  public mySkills: ElementRef;
  @ViewChild("personalWork")
  public personalWork: ElementRef;
  @ViewChild("contact")
  public contact: ElementRef;
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
  public personalWorks = [
    {
      title: "Service Prov",
      type: "Android Application",
      description:
        "Service Prov is the application where the users can search and book local service providing professionals. This application is created for Android using Java and the backend is created in Python Django Framework with MySQL database.",
      logoName: "service_prov_logo.png",
      imageName: "service_prov_app.png"
    },
    {
      title: "Air Pay",
      type: "Android Application",
      description:
        "Air Pay is the financial application in which the users can pay digitally using the Android device created in Java where as the backend implementation uses the Java Spring Framework with MySQL database.",
      logoName: "airpay_logo.png",
      imageName: "airpay_app.png"
    }
  ];
  public messageFormGroup;
  public sendClick: boolean;
  public messageSent;

  constructor(private fb: FormBuilder, private db: AngularFirestore) {
    this.messageFormGroup = fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.setMenu(this.menuItems[0]);
  }

  public setMenu(menu) {
    this.currentMenu = menu;
    let elementRef: ElementRef;
    switch (menu) {
      case "About":
        elementRef = this.about;
        break;
      case "Portfolio":
        elementRef = this.portfolio;
        break;
      case "Skills":
        elementRef = this.mySkills;
        break;
      case "Personal works":
        elementRef = this.personalWork;
        break;
      case "Contact":
        elementRef = this.contact;
        break;
      default:
        elementRef = this.home;
    }
    this.scrollToMenu(elementRef);
  }

  private scrollToMenu(elementRef: ElementRef) {
    elementRef.nativeElement.scrollIntoView({ behavior: "smooth" });
    this.currentMenu = this.menuItems[0];
  }

  public onSubmit() {
    if (this.sendClick) {
      return;
    }
    this.sendClick = true;
    if (this.messageFormGroup.valid) {
      this.db.collection('messages').add({
        firstName: this.messageFormGroup.get('firstName').value,
        lastName: this.messageFormGroup.get('lastName').value,
        email: this.messageFormGroup.get('email').value,
        message: this.messageFormGroup.get('message').value,
        submittedDate: new Date()
      });
      this.messageSent = true;
      this.messageFormGroup.reset();
      setTimeout(() => {
        this.messageSent = false;
      }, 5000)
    }
    
  }
}
