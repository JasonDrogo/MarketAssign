import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddTocartService } from 'src/service/add-tocart.service';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Items : Array<any>=[];
  inventory : number=0;
  NoOfComapnies : number =0;
  name :string = null;

  constructor(private cartService : AddTocartService,private _router : Router) {
    this.cartService.cart.subscribe((a: any[])=>{
    this.Items = a;
    })

    this.cartService.allItems.subscribe((totalItems:any[])=>{
      this.inventory = totalItems.length;
      this.setTotalCompanies(totalItems);
    })
   }

  ngOnInit(): void {
  }

  search(){
    this.cartService.filter(this.name);
  }
  setTotalCompanies(items : any[]){
    let b = new Set<any>();
    items.map((a:any)=>b.add(a.company));
    this.NoOfComapnies = b.size;
  }

  route(page : string){
    this._router.navigate([`/${page.toLowerCase()}`]);
  }
}
