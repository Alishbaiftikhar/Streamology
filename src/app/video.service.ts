import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8090/api/blogs';
  private apiUrl2 = 'http://localhost:8090/api/blogs/findAll';

  constructor(private http: HttpClient) { }

  uploadVideo(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  searchallVideos(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }
}
