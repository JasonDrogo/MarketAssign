import { Component, Input, OnInit } from '@angular/core';
import { AddTocartService } from 'src/service/add-tocart.service';
import { ProductsServiceService } from 'src/service/products-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

 
productsData : Array<any>;
filteredData : Array<any>;

  constructor(private dataService : ProductsServiceService ,private itemsinfo : AddTocartService  ) {
    this.itemsinfo.searchKey.subscribe((searchKeyword : string)=>{
      this.filter(searchKeyword);
    })
   }

  ngOnInit(): void {
this.getProduct();
  }


  getProduct(){
    this.dataService.getProducts().subscribe((data : Array<any>)=>{
this.productsData = data;
this.filteredData = data;
this.itemsinfo.ItemsinInventory(data);

    })

  }

  getName(index : number,an: any){
    console.log(an);
    let keys = Object.keys(this.productsData);
    return keys[index];
  }
 
  filter(searchKey :string){
    console.log(searchKey);
    if(searchKey != null){
      this.filteredData =  this.productsData.filter((item: any) =>
        (item['Name'].toLowerCase().indexOf(searchKey.toLowerCase()) !== -1)
      );
      }
  }

}
