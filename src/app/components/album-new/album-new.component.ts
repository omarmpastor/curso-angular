import { Component } from '@angular/core';
import { AlbumFormComponent } from '../album-form/album-form.component';
import { IDisco } from '../../interfaces/idisco';

@Component({
  selector: 'app-album-new',
  standalone: true,
  templateUrl: './album-new.component.html',
  imports: [ AlbumFormComponent ],
  styleUrl: './album-new.component.css'
})
export class AlbumNewComponent {
  onSubmit(disco: IDisco) {
    console.log('Crear nuevo disco usando POST');
    console.log(disco);
  }
}
