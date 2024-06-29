import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { map, tap } from "rxjs/operators";


@Injectable()


export class HttpHandlerService{

    apiUrlHOD = 'https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/HOD/9sLXqmVYsPZjuILTKMGw/user-data.json';
    apiUrlst = 'https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/staf/PNzK6EJydNo00VBZgsgJ/user-data.json';
    apiUrl = 'https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/leave/c2MYuJO8Fngl1kJrDIgU/user-data.json';
    obj : any;
    firstname : any ;
    username : any;

    approvedleave: number[] = [0,];
    sum: number | null = null;
  
  
  
    calculateSum() {
      this.sum = this.approvedleave.reduce((acc, curr) => acc + curr, 0);
    }
    rejectedleave : any[]= [0,];
    sub : number | null = null;

    calculateSub() {
        this.sub = this.rejectedleave.reduce((acc, curr) => acc + curr, 0);
      }



    public updatelist : any = [  ];
    
    constructor( private http : HttpClient){}

    postUser(userObj : any){
        return this.http.post(this.apiUrlHOD,userObj)
    }

    postUserst(userObj : any){
        return this.http.post(this.apiUrlst,userObj)
    }

    getuserHOD(){
        return this.http.get(this.apiUrlHOD)
    }

    getuserst(){
        return this.http.get(this.apiUrlst).pipe(map((rawdata : any)=>{
            let arr = [];

            for(let user in rawdata){
                arr.push({...rawdata[user],user})
            }
            return arr; 

        }))
    }

    
    signUpNewUser(credentials : any){
        let payload = {
            email : credentials.username.trim(),
            password : credentials.password.trim(),
        }

        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJdQ2BDcJOKv1Ma_sFdHB9plV3S0TNYHg',payload)

    }

    signInCurrentUser(credentials :any){
        
        let payload = {
            password: credentials.userpass.trim(),
            email: credentials.username.trim(),
            returnSecureToken : true,
           
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJdQ2BDcJOKv1Ma_sFdHB9plV3S0TNYHg',payload)
    }

    signInHoduser(credentials :any){
        let payload = {
            email : credentials.username,
            password : credentials.userpass,
            returnSecureToken : true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4btGuSfrFYmZhHQQHvnAcwr33WUUXp8M ',payload)

}

//leave data

postuserstf(objdtf : any){
    return this.http.post(this.apiUrl,objdtf)
   }

getuserstf(){
    return this.http.get(this.apiUrl).pipe(map((rawdata : any)=>{
       let arr = [];
       for(let user in rawdata){
           arr.push({...rawdata[user],id :user})
       }
       return arr;
    }))
}


    dialogdashrel = new Subject()
    patchUser(det:any,obj:any){
        return this.http.patch(`https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/leave/c2MYuJO8Fngl1kJrDIgU/user-data/${det}.json`,obj)
    }

    patchdata(deti : any, obj1 : any){
        return this.http.patch(`https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/staf/PNzK6EJydNo00VBZgsgJ/user-data/${deti}.json`,obj1)
    }


    clearData(){
        this.updatelist = [];
    }



    
}

