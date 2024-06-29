import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  value : any = 'HOD';
  isNewUser : boolean = true;

  hodForm : any | FormGroup;
  authForm :any | FormGroup;
  obj: {} | undefined;

  constructor( private httpServe : HttpHandlerService, private router : Router ){}

  ngOnInit(){

    this.hodForm = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      contact : new FormControl('',Validators.required),
      Department : new FormControl('',Validators.required),
      role : new FormControl(this.value),
      LogIn : new FormGroup({
        username : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required),
      })
     
    })

    // this.obj = {
    //   email :this.hodForm.username,
    //   password : this.hodForm.password
    // }
  }



  onSubmit(){
    let obj: any;
    obj = this.hodForm.value
    obj.totalleaves = 10;
    obj.approvedleave = 0;
    obj.rejectedleave = 0;
    obj.appliedLeaveData= [];
    obj.statusLeave = 'Pending'
    console.log(obj)

    
   this.httpServe.postUser(obj).subscribe((param)=>{
    console.log(param)
   })

   

   this.httpServe.signUpNewUser(this.hodForm.value.LogIn).subscribe((param)=>{
    console.log(param)
   });

   this.router.navigate(['/signIn'])


    console.log(this.hodForm)

  }

  onSubmitSt(){

    let obj: any;
    obj = this.hodForm.value
    obj.totalleaves = 10;
    obj.approvedleave = 0;
    obj.rejectedleave = 0;
    obj.appliedLeaveData= [];
    obj.statusLeave = 'Pending'
    console.log(obj)

    this.httpServe.postUserst(obj).subscribe((param)=>{
      console.log(param)
     })
  
     this.httpServe.signUpNewUser(this.hodForm.value.LogIn).subscribe((param)=>{
      console.log(param)
     })

     this.router.navigate(['/signIn'])
  }
}
