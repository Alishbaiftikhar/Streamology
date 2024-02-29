import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {  VideoUploadComponent } from './video-upload/video-upload.component';
const routeConfig: Routes = [
    // {
    //     path: '',
    //     component: AppComponent,
    //     title: 'Home page'
    //   },
      {
        path: 'videos',
        component: VideoUploadComponent,
        title: 'Home details'
      }
]
export default routeConfig;