import { Component, OnInit } from '@angular/core';
import { Video } from '../core/model/video';
import { error } from 'console';
import { Router } from '@angular/router';
import { VideoServiceService } from '../services/video-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  title: string = 'Videos';
  listVideo!: Video[];
  alert!: number;
  alerta!: string;
  constructor(
    private videoService: VideoServiceService,
    private video: Video,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.videoService.getVideo().subscribe({
      next: (res) => (this.listVideo = res),
      error: (error) => console.log('error'),
      complete: () => console.log('finish'),
    });
  }
}
