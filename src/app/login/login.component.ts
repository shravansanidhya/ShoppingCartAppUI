import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { Product } from '../product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:User[]=[];
  cartProducts: Product[]=[];
  

  constructor(private service:ServiceService) { }

  ngOnInit() {
      this.service.getAllUsers().subscribe(data=>{
            this.users=data;
            console.log(this.users);
            
      })  
  }

  
}
