import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  AllUserDetails: any[]=[];
  cartProducts: any[] =[];
  totalPrice: number=0;

  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {
    if(this.service.cartId==null) {
      alert("Please Login first");
      this.router.navigate(['/login']);
    }
    this.service.getAllUsers().subscribe(data=>{
      this.AllUserDetails=data;
      console.log(this.AllUserDetails);  
    });
    this.service.getProductsByCartId().subscribe(data=>{
      this.cartProducts=data;
      console.log(this.cartProducts);
      this.cartProducts.forEach(data=>{
        console.log(data.price);
        this.totalPrice = this.totalPrice+data.price; 
      })
      
    })
    
  }


}
