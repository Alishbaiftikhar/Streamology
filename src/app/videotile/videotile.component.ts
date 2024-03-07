import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../video.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-videotile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './videotile.component.html',
  styleUrl: './videotile.component.css'
})
export class VideotileComponent {
  @Input() video: any;
  constructor(private datePipe: DatePipe) {}
  splitKeywords(): string[] {
    // console.log('Keywords:', this.video.keywords);
    if (Array.isArray(this.video.keywords) && this.video.keywords.length > 0) {
      const firstKeyword = this.video.keywords[0];
      return firstKeyword.split(' ');
    } else if (typeof this.video.keywords === 'string') {
      return this.video.keywords.split(' ');
    } else {
      return [];
    }
  }
  formatVideoDate(): string {
    // Use DatePipe to format the date
    if (this.video && this.video.date) {
      return this.datePipe.transform(this.video.date, 'yyyy-MM-dd') || '';
    }
    
    return '';
  }
  
}
