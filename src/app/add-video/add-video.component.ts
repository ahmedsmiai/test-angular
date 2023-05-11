import { Component, OnInit } from '@angular/core';
import { Video } from '../core/model/video';
import {VideoServiceService  } from '../services/video-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video!: Video 
  
  constructor(private videoServiceService: VideoServiceService, private route:Router) {}

  ngOnInit(): void {
    this.video = new Video()
  }

  onSubmit() {
    this.videoServiceService.addVideoById(this.video).subscribe(data => {
      this.route.navigateByUrl("")
    });
  }
}
