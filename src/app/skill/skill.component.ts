import { Component, OnInit } from '@angular/core';
import { faJava, faCss3Alt, faHtml5, faAngular, faBootstrap, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  javaIcon=faJava;
  cssIcon=faCss3Alt;
  htmlIcon=faHtml5;
  angularIcon=faAngular;
  bootstrapIcon=faBootstrap;
  javascriptIcon=faJs;

  constructor() { }

  ngOnInit(): void {
  }

}
