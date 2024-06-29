import { Component, OnInit } from '@angular/core';   
import { MatDialog } from '@angular/material/dialog'
import { LeaveFormComponent } from '../leave-form/leave-form.component';

import { leaveService } from '../shared/leave.service';
import { HttpHandlerService } from '../shared/http-handler.service';
import { __param } from 'tslib';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardstaff',
  templateUrl: './dashboardstaff.component.html',
  styleUrls: ['./dashboardstaff.component.css']
})
export class DashboardstaffComponent implements OnInit{

  // detaillist : any;
  updatelist : any = [];
  detaillist : any = [];
  Totalleave : any = 10;
  Approvedleave : any  = this.httpServe.sum ;
  RejectedLeave : any = this.httpServe.sub;

  constructor(private matDialog : MatDialog,private httpServe : HttpHandlerService ,private router : Router ){}

  onclick(){
    this.matDialog.open(LeaveFormComponent,{
        width : '350px',
    })
  }

  onsignOut(){
    this.router.navigate(['/signIn'])
  }

  ngOnInit() : void{
    this.httpServe.getuserstf().subscribe((param : any)=>{
      let arr = [];
      for(let data of param){
        if(data.username == this.httpServe.username){
         arr.push(data);
          this.updatelist = arr;
        }
      }
   })

   this.httpServe.dialogdashrel.subscribe((param : any)=>{
    this.updatelist.push(param)
   })

   this.httpServe.getuserst().subscribe((paramst :any): void=>{
    console.log(paramst)
    for(let para of paramst){
      if(para.email == this.httpServe.username){
          this.detaillist.push(para);
          
      }
    }
  
})

console.log(this.detaillist)
}

// getavai(){
//  this.updatelist =   this.httpServe.getavailable();
//  console.log(this.updatelist)
// }

getavailable() : any{


}

// ngOnDestroy() : any{
//   this.updatelist = [];
// }




// this.updatelist = this.httpServe.getavailable()
// console.log(this.updatelist);
//   // console.log(this.updatelist)


//    this.httpServe.dialogdashrel.subscribe((param : any)=>{
//     // this.updatelist = param;
//     this.updatelist.push(param)
//    })
}




