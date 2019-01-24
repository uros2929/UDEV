import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  
  constructor() { }

  ngOnInit() {
 
  }

  clickOnHam(){
   let  hamMenuDiv=document.getElementById('hamMenuOpen');
    hamMenuDiv.style.display='block';
  }
  exitHamMenu(){
    let  hamMenuDiv=document.getElementById('hamMenuOpen');
    hamMenuDiv.style.display='none';
  }
}
