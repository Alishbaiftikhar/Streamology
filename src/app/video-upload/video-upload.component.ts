import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{VideotileComponent} from '../videotile/videotile.component';
import { VideoService } from '../video.service';
@Component({
    selector: 'app-video-upload',
    standalone: true,
    templateUrl: './video-upload.component.html',
    styleUrl: './video-upload.component.css',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, VideotileComponent]
})
export class VideoUploadComponent implements OnInit {
  videos: any[] = [];
  selectedCategory: string = '0';
  constructor(private videoService: VideoService) {}
  ngOnInit(): void {
    this.loadVideos();
  }
  loadVideos() {
    this.videoService.searchallVideos().subscribe((data) => {
      this.videos = data;
    });
  }
}
