import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8090/api/blogs';
  private apiUrl2 = 'http://localhost:8090/api/blogs/findAll';
  private apiUrl3 = 'http://localhost:8090/api/blogs/find';

  constructor(private http: HttpClient) { }

  uploadVideo(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  searchallVideos(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }
  searchVideosByCategoryAndSubcategory(category: string, subcatagory: string,title:string,location:string): Observable<any[]> {
    console.log('Category:', category);
    const params = {
      title: title,
      category: category,
      subcategory: subcatagory,
      location: location,
    };

    return this.http.post<any[]>(this.apiUrl3, { params: params });
  }
}
