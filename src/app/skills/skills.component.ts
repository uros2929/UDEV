import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  widthHTML = 1;
  widthJS=1;
  widthAngular=1;
  widthBootstrap=1;
 
  constructor() { }

  ngOnInit() {
   this.moveBar('scalePerHTML',95,this.widthHTML);
   this.moveBar('scalePerJS',90,this.widthJS);
   this.moveBar('scalePerAngular',70,this.widthAngular);
   this.moveBar('scalePerBootstrap',85,this.widthBootstrap);
  }

  moveBar(id,widthPer,widthLang){
    let setINTH=setInterval(()=>{
      widthLang++;
      document.getElementById(id).style.width=widthLang+'%';
      if (widthLang==widthPer) {
        clearInterval(setINTH)
      }
    },8)
  }

}
