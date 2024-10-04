import { Component } from '@angular/core';
import { SearcherComponent } from '../searcher/searcher.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SearcherComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
