import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Flower } from '../models/flowers';
import { User } from '../models/user';
import { FlowerService } from '../services/flowerService';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  flower:Flower
  cart:Cart
  cartid:any

  selectedFlower:Flower
  flowers:Flower[];
  flowerss:Flower[]=[];
  tmpFlower:Flower;
  constructor(private flowerService:FlowerService) { 
    this.tmpFlower=new Flower();
    this.cart=new Cart();
    this.flower = new Flower();
    // this.flowers = this.flowerService.getSummaryFlowers();
   this.flowers = this.flowerService.getSummaryFlowers();
    this.selectedFlower = new Flower();
    
  }

  ngOnInit(): void {
  }
  getPrice(){
    
       var total:number = 0;
     
       this.flowers.forEach(element => {
       total +=element.price*element.qty;
       
    });
    
    return total;
   }
   removeFlower(id:any){
     this.flowerService.removeFlower(id);
 }
 AddCart(price:any){
   console.log(price);
   this.cartid=localStorage.setItem("price",price);
  // this.cartid=localStorage.getItem("id");
 //  console.log(this.cartid);
  this.flowerService.AddCart(price);
  this.flowerService. AddCart(this.cart).subscribe((data)=>{
    var user:User = data as User;
    
   // console.log(user.jwtToken);
     // localStorage.setItem("token",user.jwtToken)
   // this.router.navigate(["flower"])  
  });
  
}
}
