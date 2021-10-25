import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flower } from '../models/flowers';
import { FlowerService } from '../services/flowerService';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  flower:Flower
  //flowers:Flower[];
 
  myForm:FormGroup;
  constructor( private flowerService:FlowerService,private router:Router,private httpClient:HttpClient) { 
    this.flower=new Flower();
    this.flower=new Flower();
  // this.flowers=this.flowerService.getFlowerss();
   
    this.myForm=new FormGroup({
     "bid":new FormControl(null,[Validators.required]),
     "name":new FormControl(null,[Validators.required]),
     "desc":new FormControl(null,[Validators.required]),
     "price":new FormControl(null,[Validators.required]),
     "quant":new FormControl(null,[Validators.required]),
   });
  }
  public get bid():any{
    return this.myForm.get("bid");
  }

  public get name():any{
    return this.myForm.get("name");
  }
  public get desc():any{
    return this.myForm.get("desc");
  }
  public get price():any{
    return this.myForm.get("price");
  }
  public get quant():any{
    return this.myForm.get("quant");
  }

  ngOnInit(): void {
  }
  add(content:any){
     console.log(this.flower);
    
     this.flowerService.AddFlowers(this.flower).subscribe((data)=>{
      var user:Flower = data as Flower;
     // console.log(user.jwtToken);
   //   localStorage.setItem("token",user.jwtToken)
      this.router.navigate(["flower"])  
    });
  }
  AddFlower(){
    // console.log(this.checkId(this.flower));
    console.log(this.flower);
    this.flowerService.AddFlowers(this.flower).subscribe((data)=>{
      var user:Flower = data as Flower;
      console.log(data);
    //  console.log(user.jwtToken);
   //localStorage.setItem("token",user.jwtToken)
      this.router.navigate(["flowerorder"])  
    });
  }
  //   if (this.checkId(this.flower ) ) {
     
  //     //this.flowers.push(new Flower( this.flower.id,this.flower.name,this.flower.description,this.flower.price,this.flower.qty));
  //     //this.state = false;
  //   }  else {
  //   //  this.open(content);
  //     //this.state = true;
  //   }
  
  //   // this.router.navigate(["flowerorder"])         
  // }
  // checkId(flower:any){
  //  // var element = this.flowers.find(el=> el.id==flower.id)
  //  // return element?false:true
    
  // } 
  
  // // addtocart(summary:Summary){
  // //   this.flowerService.AddCart(this.summary);
  // //   this.summary=new Summary();
  // // }
  // clearCart(){
  //   this.flowerService.clearCart();
    
    
  // }

}
