import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart } from "../models/cart";
import { Flower } from "../models/flowers";


@Injectable({
    providedIn: 'root'
  })

export class FlowerService{
    flowers:Flower[]=[];
    orderedFlowers:Flower[];
    cartid:any
    cartss:Cart[];
    carts:Cart;
    cart:Cart;
    price:any

    
    grandtotallPrice:number=0;
    //flowercart:
    constructor(private httpClient:HttpClient){
        this.carts=new Cart();
        this.cart=new Cart();
        this.cartss=[]
        this.flowers=[
          new Flower(1,"jasmin","goodsmell",32,5),  
       ]
       
        this.orderedFlowers = [ ];
    

    }
    getFlowerss(){
        var header = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        })
          console.log(localStorage);
        
           return this.httpClient.get("http://localhost:10747/api/Flower",{headers:header});
          
    }
    getSummaryFlowers(){
        // var header = new HttpHeaders({
        //     'Content-Type':'application/json',
        //     'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        // })
        //   console.log(localStorage);
        
        //   return this.httpClient.get("http://localhost:10747/api/Flower",{headers:header});
      return this.orderedFlowers;
  }
    
  getFlower(id:number):Flower{
    var flower:Flower = new Flower( );
    this.flowers.forEach(element => {
        if(element.id == id)
        flower = element;

    });
    this.orderedFlowers.forEach(element => {
        console.log("test" + element);
        
    })
    return flower;
}

AddFlowers(flower:Flower){
   console.log(flower);
   this.flowers.push(flower);
    this.flowers.forEach((element, index) => {
        if(element.id == flower.id){
            element.qty-=1;
            if (element.qty >1) {
                this.flowers.splice(index,1)
            }
        }
    });
   
     this.addFlowerToOrder(flower);
     console.log(flower);
    var header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
    })
     
    
       return this.httpClient.post("http://localhost:10747/api/Flower",flower,{headers:header});
}  
   
    // this.flowers.forEach((element, index) => {
    //     if(element.id == flower.id){
    //         element.quantity-=1;
    //         if (element.quantity <1) {
    //             element.available=false;
    //         }
    //     }
    // });
     //this.addFlowerToOrder(flower);
     //return this.flowers;
//}
    
//     AddFlowers(flower:any){
//       this.flowers.forEach((element, index) => {
//           if(element.id == flower.id){
//               element.quantity-=1;
//               if (element.quantity <1) {
//                   element.available=false;
//               }
//           }
//       });
//       this.addFlowerToOrder(flower);
//       return this.flowers;
//   }
//   registerUsingAPI(user:User){
//     console.log("from the service")
//     console.log(user);
//     console.log("--------------")
//     return this.httpClient.post("http://localhost:10747/api/User",user); 
//   }
  addFlowerToOrder(flower:any){

    var element = this.orderedFlowers.find(el=> el.id==flower.id)
        if (element) {
            element.qty+=1;
          
            } else {
                this.orderedFlowers.push(new Flower(flower.id,flower.name,flower.description,flower.price,1));
            }
            this.getTotallSum();
    return this.orderedFlowers;
} 
removeFlower(id:any){
  this.orderedFlowers.forEach((element, index) => {
      if(element.id == id){
          this.flowers.forEach(element1 => {
              if(element1.id == id){
                  element1.qty+=1;
                  if (element1.qty >0) {
                    //  element1.available=true;
                  }
              }
          });
          element.qty-=1; 
          if (element.qty <1) {
              this.orderedFlowers.splice(index,1)
          }
      }
  });
  return this.orderedFlowers;
}
getTotallSum(){
  this. grandtotallPrice = 0;
  this.orderedFlowers.forEach(el=> {
  this. grandtotallPrice += el.price*el.qty
  })
  return this. grandtotallPrice;
}
    
    clearCart() {
        this.flowers = [];
        return this.flowers;
      }
      AddCart(cart:Cart){
       //   console.log(cart);
       this.cartid=localStorage.getItem("id");
        this.price=localStorage.getItem("price");
        this.cartss.push(this.carts);
        // console.log(this.cartid);
        // console.log(this.cart);
         this.cartss.forEach(element => {
        
             element.UserId=this.cartid;
             element.TotalPrice=this.price;
             

            // console.log(element.cartid);
         });
        // this.cart.push(cart);
    //     // console.log(this.cart);
    //   cart=new Cart({
          
    //   });
     console.log(this.cartss);
    cart = new Cart();
    cart.UserId= this.cartid;
    cart.TotalPrice=this.price;
    cart :({
        
        UserId:localStorage.getItem("id"),
   
        TotalPrice:localStorage.getItem("id"),
    }
    );
        var header = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
            

        })
        
         return this.httpClient.post("http://localhost:10747/api/Cart",cart,{headers:header});
        
        //    return this.httpClient.post("http://localhost:10747/api/Cart",{headers:header},this.cartid);

      }
               
}