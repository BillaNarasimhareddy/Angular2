import { Component, OnInit } from '@angular/core';
import{Employee}from './Employee.Model'

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

 Employees:Employee[]=[
   {'id':1,'Name':'name','Age':'20','State':'hyd','Country':'india'},
   {'id':2,'Name':'myname','Age':'20','State':'Telenagana','Country':'india'}
   ];

   hide:boolean=true;
 Modle:any={};
  constructor() {
    
   }
    togole(value:boolean)
    {
        if(value==true)
        {
          this.hide=false;
        }
        else
        {
        this.hide=true;
        }
        
    }

onsubmit(value:Employee) 
{
  let ID =value.id
  let count:number=0;
    if(value.id>0)
    {

     for(var i=0;i<this.Employees.length;i++) 
     {
         if(this.Employees[i].id==ID)
         {
           this.Employees.splice(i,1,value);
           count++;
         }
        
     }
     if(count==0)
     {
         this.Employees.push(value);
     }
    }
  this.Modle={};
  this.hide=true;
 }

 deleteEmployee(clicked, value:Employee)
 {
  let conform=confirm("do you want delete this");
  if(conform)
  {
    this.Employees.splice(value.id);
  }

 }
 editEmployee(clicked,value:Employee)
 {
     this.hide=false;
     this.Modle=value;
     
 }
  ngOnInit() {
  }

}

