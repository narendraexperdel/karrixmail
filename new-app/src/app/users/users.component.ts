import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
	
 users : any[]=[
  { 
    "name" : "S Ravi Kumar" ,
    "dept" : "CS",
    "city" : "Mumbai",
    "dob" : "01/05/1999"
  },

  { 
    "name" : "Ajay Sinha" ,
    "dept" : "Civil",
    "city" : "Delhi",
    "dob" : "07/06/1999"
  },
  { 
    "name" : "Manoj Sharma" ,
    "dept" : "IT",
    "city" : "Chennai",
    "dob" : "14/05/1999"
  },
  { 
    "name" : "Achin Agarwal" ,
    "dept" : "ME",
    "city" : "Patna",
    "dob" : "06/11/1999"
  },
  { 
    "name" : "Narendra Yadav" ,
    "dept" : "EE",
    "city" : "Gorakhpur",
    "dob" : "18/05/1995",
  },
  { 
    "name" : "Deepanshu Pathak" ,
    "dept" : "ECE",
    "city" : "Kanpur",
    "dob" : "02/05/1996"
  },
  { 
    "name" : "Pankaj Barhate" ,
    "dept" : "GYM",
    "city" : "Nasik",
    "dob" : "06/02/2009"
  },
];

	

	ngOnInit(){
       
	}
}
