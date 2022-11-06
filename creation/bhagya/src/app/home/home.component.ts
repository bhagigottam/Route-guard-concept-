import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  username=""

  ngOnInit(): void {

    let b:any="";
    if(localStorage.getItem('userDetails')){

      b = localStorage.getItem('userDetails');
    }
 let a  = JSON.parse(b);
 console.log(a);
 this.username = a.name;
  }

}
