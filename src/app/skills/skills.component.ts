import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  widthHTML = 1;
  widthJS = 1;
  widthAngular = 1;
  widthBootstrap = 1;
  JQuery = 1;
  git = 1;
  sql = 1;

  constructor() { }

  ngOnInit() {
    this.moveBar('scalePerHTML', 90, this.widthHTML);
    this.moveBar('scalePerJS', 80, this.widthJS);
    this.moveBar('scalePerAngular', 70, this.widthAngular);
    this.moveBar('scalePerBootstrap', 80, this.widthBootstrap);
    this.moveBar('skillPerJQuery', 55, this.JQuery);
    this.moveBar('skillPerGit', 70, this.git);
    this.moveBar('skillPerSQL', 50, this.sql)
  }

  moveBar(id, widthPer, widthLang) {
    let setINTH = setInterval(() => {
      widthLang++;
      document.getElementById(id).style.width = widthLang + '%';
      if (widthLang == widthPer) {
        clearInterval(setINTH)
      }
    }, 8)
  }

}
