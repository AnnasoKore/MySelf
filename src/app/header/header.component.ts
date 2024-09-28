import { Component, OnInit } from '@angular/core';
import { faDownload, faUserGraduate, faCode, faProjectDiagram, faBriefcase, faUser, faHome, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display!: boolean;
  downloadResume=faDownload;
  educationIcon=faUserGraduate;
  skillIcon=faCode;
  projectIcon=faProjectDiagram;
  experienceIcon=faBriefcase;
  userIcon=faUser;
  houseIcon=faHome;
  menuIcon=faBars;
  constructor() { }

  ngOnInit(): void {
  }
  showSideBar() {
    this.display = true;
  }
  hideSideBar() {
    this.display = false;
  }
}
