import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpHandlerService } from '../shared/http-handler.service';
import { leave } from '../shared/model/leave.model';
import { leaveService } from '../shared/leave.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit{

  formobj: any |FormGroup;
  staff : any;
  sname : any ;
  status : any = 'pending' ;


  days: Number | null = null ;

  constructor(private httpserve : HttpHandlerService,public dialog: MatDialogRef<LeaveFormComponent>){ }

  ngOnInit(): void {

    this.formobj = new FormGroup({
      from : new FormControl( '', Validators.required),
      To : new FormControl('', Validators.required),
      reason : new FormControl('',Validators.required),
    })
  }



  calculateDays() {
    
      const startDateObj = new Date(this.formobj.value.from);
      const endDateObj = new Date(this.formobj.value.To);
      const timeDiff = endDateObj.getTime() - startDateObj.getTime();
      this.days = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  }

  onSubmit(){
    this.calculateDays()
    this.staff = new leave(this.httpserve.firstname,this.formobj.value.from,this.formobj.value.To,this.formobj.value.reason,this.status,this.httpserve.username,this.days);
    this.httpserve.postuserstf(this.staff).subscribe((param)=>{
      console.log(param);
      console.log(this.staff);
    });
    this.httpserve.dialogdashrel.next(this.staff);
    this.dialog.close();
  }
}



 