import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any[]=[];
  public AllUserDetails : any[]=[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllProducts()
       .subscribe(data=>{  
            this.productList = data;
            console.log(this.productList);   
          });
          this.service.getAllUsers().subscribe(data=>{
             this.AllUserDetails = data;
          });
        }
  }

