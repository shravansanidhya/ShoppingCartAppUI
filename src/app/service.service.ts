import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url1: string = "http://localhost:8080/stock/getAllProducts";
  url2: string = "http://localhost:8080/cart/addToCart";
  url3: string = "http://localhost:8080/cart/getAllUsers";
  url4: string = "http://localhost:8080/cart/delete";
  url5: string = "http://localhost:8080/user/addUser";
  url7: string = "http://localhost:8080/cart/getProductsByCartId";

  userId: number;
  cartId:number;
  totalPrice : number=0;

  constructor(private http: HttpClient,private router:Router) { }

  addUser(userName:string) {
    console.log(userName);
     this.http.get(this.url5+"/"+userName).subscribe(data=>{ 
       alert("User Successfully Added"); 
     });
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any>(this.url1);
  };

  addToCart(pid:number,cid:number,uid:number): void {
    if(cid==null){
      alert("Please Login First");
      this.router.navigate(['/login']);
    } else {
      console.log(uid); 
    this.http.get(this.url2+"/"+pid+"/"+cid+"/"+uid).subscribe(data=>{
      console.log(data);
    });
    alert("Added to Cart Successfully");
  }
  };

  getAllUsers(): Observable<any[]> {
    return this.http.get<any>(this.url3);
  };

  goToCart(uid:number,cid:number) {
    this.userId=uid;
    console.log(this.userId);
    this.cartId=cid;
    console.log(this.cartId);
 }

 deleteProductFromCart(pid:number,cid:number) {
   this.http.delete(this.url4+"/"+pid+"/"+cid).subscribe(data=>{
     console.log(data); 
   });
   alert("Removed from Cart");
 }

  getProductsByCartId() :Observable<any[]> {
      return this.http.get<any>(this.url7+"/"+this.cartId);
  }
}
