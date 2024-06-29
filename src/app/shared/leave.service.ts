import { BehaviorSubject, map } from "rxjs";
import { leave } from "./model/leave.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class leaveService{

   apiUrl = 'https://st-5-4404e-default-rtdb.asia-southeast1.firebasedatabase.app/leave/c2MYuJO8Fngl1kJrDIgU/user-data.json'

   constructor( private httpServe : HttpClient ){}


    private detailList : leave[] = [

        
        
    ]


     leavelistobs = new BehaviorSubject(this.detailList.slice());

     updatelist( int : any){
        this.detailList.push(int);
        this.leavelistobs.next(this.detailList.slice());
        console.log(this.detailList)
     }

     postuser(objdtf : any){
      return this.httpServe.post(this.apiUrl,objdtf)
     
     }

     getuserst(){
      return this.httpServe.get(this.apiUrl).pipe(map((rawdata : any)=>{
         console.log(rawdata)
         let arr = [];
         for(let user in rawdata){
             arr.push({...rawdata[user],user})
         }
         return arr;
          
      }))

      
  }

  
} 




// updateList(int : any){
//     this.detailList.push(int);
//     this.shoppingListobs.next(this.itemList.slice());
//     console.log(this.itemList);
// }