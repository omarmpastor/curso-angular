import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
// import { ProductNewComponent } from './components/product-new/product-new.component';
//import { ProductListComponent } from './product-list/product-list.component';
// import { ProductEditComponent } from './components/product-edit/product-edit.component';
// import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    // ProductEditComponent,
    // ProductListComponent,
    // LoginComponent,
    // ProductNewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
