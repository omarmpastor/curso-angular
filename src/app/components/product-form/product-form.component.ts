import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Input() product: IProduct = { id: 0, name: '', price: 0, thumbnail:''};
  @Output() emitProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  onSubmit(): void {
    this.emitProduct.emit(this.product);
  }
}
