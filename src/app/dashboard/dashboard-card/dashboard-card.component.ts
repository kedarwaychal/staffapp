import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/shared/http-handler.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit{

@Input() details : any;
@Input() ind : any;

updatelist : any = [];

constructor(private httpserve : HttpHandlerService,private router : Router){}

isApproved : boolean |any ;
exist : boolean = false;

ngOnInit(): void {

  

  
}


Onclick(det: any,detl : any){
  this.httpserve.patchUser((det.user),{status : "approved"}).subscribe((param : any)=>{
    console.log(param);
    this.details.status = "approved"
  });

  this.isApproved = true;
  this.exist = true;
  let id : any;



  this.httpserve.getuserst().subscribe((paramst :any)=>{
    console.log(paramst)
    console.log(paramst.user)
    for(let para of paramst){
      if(para.email == det.username ){
          console.log(para.user)
          id = para.user;
          console.log(id)
      }
    }

    this.httpserve.patchdata((id),{approvedleave : detl}).subscribe((param: any)=>{
      console.log(param)
    });
  
})



}

Onreject(det: any,detl : any){
  this.httpserve.patchUser((det.user),{status : "rejected"}).subscribe((param : any)=>{
    console.log(param);
    this.details.status = "rejected"
  });
  this.isApproved = false;
  this.exist = true;
  this.httpserve.rejectedleave.push(detl);
  this.httpserve.calculateSub();
  let id : any;



  this.httpserve.getuserst().subscribe((paramst :any)=>{
    console.log(paramst)
    console.log(paramst.user)
    for(let para of paramst){
      if(para.email == det.username ){
          console.log(para.user)
          id = para.user;
      }
    }

    this.httpserve.patchdata((id),{rejectedleave : detl}).subscribe((param: any)=>{
  console.log(param)
});
})
}
}

