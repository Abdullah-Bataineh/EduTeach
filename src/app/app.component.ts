import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EduTeach';
  name:string='Abdulla Tawil';
  email:string='abdtawil25@gmail.com';
  salary:number=250;
  imagepath:string='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
Inputhandle(ev:any){
  this.name=ev.target.value;
  console.log(ev.target.value);
}
clear(){
  this.name='';
  this.email='';
  this.salary=0;
}
customers:any[]=[{
  id:1,
  name:'abdulla',
  age:22,
  city:'Irbid'
},
{
  id:2,
  name:'yazan',
  age:23,
  city:'Amman'
}
]
}
