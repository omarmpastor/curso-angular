import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IGenero } from '../../interfaces/igenero';
import { IAutor } from '../../interfaces/iautor';
import { MusicalGenreService } from '../../services/musical-genre.service';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../../services/author.service';
import { IDisco } from '../../interfaces/idisco';

@Component({
  selector: 'app-album-form',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './album-form.component.html',
  styleUrl: './album-form.component.css'
})
export class AlbumFormComponent implements OnInit {
  @Output() submitEvent: EventEmitter<IDisco> = new EventEmitter<IDisco>();
  @Input() album: IDisco | undefined;
  albumForm!: FormGroup;
  genres$: Observable<IGenero[]>;
  authors$!: Observable<IAutor[]>;

  constructor(
    private fb: FormBuilder,
    musicalGenreService: MusicalGenreService,
    authorService: AuthorService
  ) {
    this.genres$ = musicalGenreService.get();
    this.authors$ = authorService.get();
  }
  
  ngOnInit() {
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    
    this.albumForm = this.fb.group({
      id: new FormControl({ value: '', disabled: true}),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      precio: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      fechaAlta: new FormControl(dateStr),
      activo: new FormControl('1'),
      foto: new FormControl('', []),
      autor: new FormControl([Validators.required]),
      genero: new FormControl([Validators.required]),
      pistas: [[]]
    });
  }

  onSubmit() {
    if (this.albumForm.valid) {
      this.submitEvent.emit(this.albumForm.value as IDisco);
    }
  }
}
