import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   fun1(event)
  {
   alert("Button Clicked"); 
  }

  fun2(event,myname)
  {
    alert("My Name is : "+myname);
  }

  no3:number;
  fun3(no1,no2){
    this.no3= +no1 +  +no2;
    alert("Sum of 2 no is : "+this.no3);
  }


  un:string="admin"
  pw:number=123
  fun4(event,uname,pass){
    if(uname==this.un && pass==this.pw)
    {
        alert("Welcome "+ this.un);
    }
    else
    {
      alert("Sorry try again");
    }
  }




  Colors = ['Red', 'Blue', 'Green'];
  addColor(event,str: string) {
    if (str) {
      this.Colors.push(str.valueOf());
	  
    }
  }

}
