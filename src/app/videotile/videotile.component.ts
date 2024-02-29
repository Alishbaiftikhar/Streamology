import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
@Component({
  selector: 'app-videotile',
  standalone: true,
  imports: [],
  templateUrl: './videotile.component.html',
  styleUrl: './videotile.component.css'
})
export class VideotileComponent {
  @Input() video: any;
}
