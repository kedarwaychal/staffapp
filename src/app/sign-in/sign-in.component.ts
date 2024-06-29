import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  isNewUser : boolean = true;
  signInForm :any | FormGroup ;
  
  constructor( private httpServe : HttpHandlerService, private router : Router ){}
 ngOnInit() : void{

  this.signInForm = new FormGroup({
    username : new FormControl('',Validators.required),
    userpass : new FormControl('',Validators.required),
  })
  }

  OnSubmit(){ 
    let obj = this.signInForm.value;

      this.httpServe.signInCurrentUser(this.signInForm.value).subscribe((param : any)=>{
        console.log(param);

       this.httpServe.getuserst().subscribe((paramst :any)=>{
        for(let para of paramst){
          // console.log(para)
          if(obj.username == para.LogIn.username){
            this.router.navigate(['/staff'])
            this.httpServe.firstname = para.firstname + para.lastname;
                this.httpServe.username = para.LogIn.username;
            return 
          }else{
            

            this.router.navigate(['/dash'])
            
          }
        }
       })


        // this.httpServe.getuserst().subscribe((paramst : any)=>{
        // for(let para of paramst){
        //   if(para.LogIn.username == obj.username){
        //     this.router.navigate(['/register']); 
        //     // this.httpServe.firstname = user.firstname + user.lastname;
        //     // this.httpServe.username = user.LogIn.username;
        //     // console.log(this.httpServe.firstname)
        //   }else{
        //     this.router.navigate(['/dash'])
        //   }
        // }
        // })
      }
      )}}

     

  

   



   







    

  






