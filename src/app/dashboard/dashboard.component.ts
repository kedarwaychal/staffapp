import { Component, OnInit } from '@angular/core';
import { leaveService } from '../shared/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  infolist : any;
  constructor(private leaveserve : leaveService,private router : Router){

  }

  ngOnInit(): void {



    this.leaveserve.getuserst().subscribe((info : any)=>{
      console.log(info)
     this.infolist =  info; 
      console.log(this.infolist)
    })
  }

  onsignOut(){
    this.router.navigate(['/signIn'])
  }

}
