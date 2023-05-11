import { Injectable } from '@angular/core';
import { Video } from '../core/model/video';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class VideoServiceService {
  
  
  readonly api_url = "http://localhost:3000/videos"
  constructor(private httpClient : HttpClient) {}

  addVideoById ( video : Video) {
    return this.httpClient.post(this.api_url, video)
  }
  getVideo(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.api_url)
  }
  putVideoById (id : number, video : Video) {
    return this.httpClient.put(`${this.api_url}/${id}`, video)
  }
}
