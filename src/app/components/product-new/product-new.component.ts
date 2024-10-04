import { Component } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-new',
  standalone: true,
  imports: [
    ProductFormComponent
  ],
  templateUrl: './product-new.component.html',
  styleUrl: './product-new.component.css'
})
export class ProductNewComponent {
  constructor(private productsService: ProductsService) {}

  productAdd(product: IProduct) {
    this.productsService.add(product).subscribe(p => console.log(p));
  }
}
