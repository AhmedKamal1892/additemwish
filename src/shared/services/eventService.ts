import { Observable,Subject } from "rxjs";

class Eventservice{
  private subject=new Subject();
  emit(eventname:string,payload:any){
    
    this.subject.next({eventname,payload})
  }

  listen(eventname:string,callback:(event:any)=>void){
    this.subject.asObservable().subscribe((nextObj:any)=>{

      if(eventname==nextObj.eventname){
        callback(nextObj.payload)
      }
    })
  }
}
export default new Eventservice()
