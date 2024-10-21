import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'album', component: AlbumListComponent },
    { path: 'album/:id', component: AlbumDetailComponent },
    { path: '', redirectTo: '/album', pathMatch: 'full' }
];
