import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../interfaces/iproduct';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products$: Observable<IProduct[]>;


  constructor(private productsService:ProductsService) {
    this.products$ = this.productsService.getAll();
  }

  ngOnInit() {
    //this.products$.subscribe((items: IProduct[]) => this.prods = items);
  }
}
