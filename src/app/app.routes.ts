import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductNewComponent } from './components/product-new/product-new.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-new', component: ProductNewComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' }
];
