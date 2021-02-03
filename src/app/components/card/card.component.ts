import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AddTocartService } from 'src/service/add-tocart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() data : any;
@Input() name : string;
itemsInCart : any[]=[];
  constructor(private cartInfo : AddTocartService) {
    this.cartInfo.cart.subscribe((itemsInCart : any[])=>{
this.itemsInCart = itemsInCart;
    })
   }

  ngOnInit(): void {
  }

  verify(product :any) : boolean{
    let a = this.itemsInCart.findIndex((item:any)=> item.Name == product.Name && item.company == product.company);
    if(a == -1){
      return true;
    }
    else{
      return false;
    }
  }
  saveToBag(product :any){
this.cartInfo.addTocart(product);
  }
  removeFromBag(product :any){
    this.cartInfo.removeCArt(product);

  }
  

}
