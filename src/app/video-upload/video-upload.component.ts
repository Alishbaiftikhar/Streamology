import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{VideotileComponent} from '../videotile/videotile.component';
import { VideoService } from '../video.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-video-upload',
    standalone: true,
    templateUrl: './video-upload.component.html',
    styleUrl: './video-upload.component.css',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, VideotileComponent,RouterLink]
})
export class VideoUploadComponent implements OnInit {
  videos: any[] = [];
  selectedSubcategory: string = '0';
  selectedCategory: string = '0';
  title:string='0';
  location:string='0';
  selectedRadio: string = 'Title';
  searchContent: string = '';

  constructor(private videoService: VideoService) {}
  ngOnInit(): void {
    this.loadVideos();
  }
  loadVideos() {
    console.log(this.selectedCategory);
    this.videoService.searchVideosByCategoryAndSubcategory(this.selectedCategory, this.selectedSubcategory,this.title,this.location)
    .subscribe((data) => {
      this.videos = data;
    });
  }
  onCategoryChange() {
    this.loadVideos();
  }

  onSubcategoryChange() {
    this.loadVideos();
  }
  onSearch() {
    // Check if a radio option is selected
    if (this.selectedRadio === 'Title' || this.selectedRadio === 'Location') {
      // Update the corresponding property (title or location)
      if (this.selectedRadio === 'Title') {
        this.title = this.searchContent;
        this.location = '0';  // Reset location
      } else if (this.selectedRadio === 'Location') {
        this.location = this.searchContent;
        this.title = '0';  // Reset title
      }

      // Reload videos
      this.loadVideos();
    } else {
      // Alert user that no radio option is selected
      alert('Please select a radio option (Title or Location)');
    }
  }
}
