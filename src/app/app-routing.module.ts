import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddVideoComponent} from '../app/add-video/add-video.component'
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  
  { path: 'add', component: AddVideoComponent },
  { path: 'videos', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
