import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email="aannaso.kore@gmail.com";
  email1="annasokore220@gmail.com";
  mobile="+91 9890 20 5790";
  linkdinIcon=faLinkedin;
  gitIcon=faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
