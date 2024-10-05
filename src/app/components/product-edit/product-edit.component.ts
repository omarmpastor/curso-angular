import { Component } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CommonModule } from '@angular/common';
import { catchError, Observable } from 'rxjs';
import { IProduct } from '../../interfaces/iproduct';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    CommonModule,
    ProductFormComponent
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product$!: Observable<IProduct>;
  hasError: boolean = false;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    route.paramMap.subscribe(paramMap => {
      const id: number = Number(paramMap.get('id'));
      this.product$ = productsService.get(id).pipe(catchError(err => {
        this.hasError = true;
        throw new Error(err);
      }));
    });
  }

  productModified(product: IProduct) {
    this.productsService.modify(product).subscribe(p => console.log(p));
  }
}
