import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployess',
  templateUrl: './viewemployess.component.html',
  styleUrls: ['./viewemployess.component.css']
})
export class ViewemployessComponent implements OnInit {

  constructor(private myapi:ApiService) {
this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewemployee().subscribe(
      (data)=>{
        this.employeeData=data
      }
    )
  }
 
  deleteemployee=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteemployee(data).subscribe(
      (response)=>{
        alert ("Deleted")
      }
    )
   this.fetchData()
  }


  employeeData:any=[]

  ngOnInit(): void {
  }

}
