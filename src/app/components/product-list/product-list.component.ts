import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/iproduct';
import { catchError, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  hasError: boolean = false;
  products$: Observable<IProduct[]>;


  constructor(private productsService:ProductsService) {
    this.products$ = this.productsService.getAll().pipe(catchError(err => {
      this.hasError = true;
      throw new Error(err);
    }));
  }

  ngOnInit() {
    //this.products$.subscribe((items: IProduct[]) => this.prods = items);
  }
}
