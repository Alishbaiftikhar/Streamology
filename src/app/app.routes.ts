import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import{HomeComponent } from './home/home.component';
export const routes: Routes = [ {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'videos',
    component: VideoUploadComponent,
    title: 'Home details'
  }
];
