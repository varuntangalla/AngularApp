import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : any;

  constructor(private http:HttpClient) { }

  ngOnInit() {

   let resp=this.http.get("http://172.16.1.76:9090/getAllUsers");
    resp.subscribe((data)=>this.users=data);
  }

}
