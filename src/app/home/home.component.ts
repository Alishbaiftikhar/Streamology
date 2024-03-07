import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {VideoUploadComponent} from '../video-upload/video-upload.component';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { VideoService } from '../video.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule,MatProgressBarModule,RouterModule,RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 // videoUploadForm: FormGroup;
 fileName = '';
 selectedFile: File | null = null; 
 videoUploadForm = this.formBuilder.group({
   name: ['', Validators.required],
   description: [''],
   location: [''],
   category: ['0',Validators.required],
   subcategory: [{ value: '', disabled: true },Validators.required],
   date: ['',Validators.required],
   keywords: [''],
   video: [null, Validators.required],
 });
 showAllVideos() {
   this.router.navigate(['/videos'], { skipLocationChange: true }).then(() => {
     this.router.navigate(['/videos']);
   });
 }
 ngOnInit() {
   // Enable or disable dropdown2 based on dropdown1 value
   this.videoUploadForm.get('category')?.valueChanges.subscribe((value) => {
     const dropdown2Control = this.videoUploadForm.get('subcategory');
    //  console.log(dropdown2Control);
     if (value !== '0') {
       dropdown2Control?.enable();
     } else {
       dropdown2Control?.disable();
     }
   });
 }
 title = 'VideoApplication';
 selectedCategory: string = ''; 
 keywordsInput: string = '';
 
 keywords: string[] = [];
 constructor (private formBuilder: FormBuilder,
   private videoService: VideoService,private router: Router) {

 }

 updateKeywords() {
   // Clear previous keywords
   this.keywords = [];

   // Split input value by spaces
   this.keywords = this.keywordsInput.split(' ').filter(keyword => keyword.trim() !== '');
   console.log(this.keywords);
 }
 onFileSelected(event: any) {
this.selectedFile = event.target.files[0];
if (this.selectedFile) {
this.fileName = this.selectedFile?.name;
}
 }
 onSubmit() {
   // name: String = this.videoUploadForm.get('name').value;
   
   // Handle form submission
   if (this.videoUploadForm.valid) {
    const locationValue = this.videoUploadForm.get('location')?.value?.toLowerCase();
    const nameValue = this.videoUploadForm.get('name')?.value?.toLowerCase();

    // Update the form values with lowercase values
    this.videoUploadForm.patchValue({ location: locationValue, name: nameValue });
     const formData = new FormData();
     Object.keys(this.videoUploadForm.value).forEach(key => {
       formData.append(key, this.videoUploadForm.get(key)?.value);
     });
     const videoFileControl = this.videoUploadForm.get("video");
console.log(this.videoUploadForm.get('subcategory'));
if (videoFileControl ) {
 const videoFileValue = videoFileControl.value;

 if (videoFileValue) {
   formData.append("video", this.selectedFile as Blob, this.selectedFile?.name);
 }
}
     console.log(formData.get('video'));
     // Append form values to FormData
     // Object.keys(this.videoUploadForm.value).forEach(key => {
     //   formData.append(key, (this.videoUploadForm.value[key] as any));
     // });

     // Access formData in your Angular service or perform other actions
     console.log(this.videoUploadForm.value);
     this.videoService.uploadVideo(formData).subscribe(
       result => {
         console.log(result.data);

         if (result.status === 200) {
           alert('Video uploaded successfully');
         } else {
           alert('An error occurred');
         }
       },
       error => {
         console.error('Error:', error);
         alert('Server Error');
       }
     );

 }
 else {
   // If the form is not valid, display alerts for each invalid field
   Object.keys(this.videoUploadForm.controls).forEach(key => {
     const control = this.videoUploadForm.get(key);
     if (control?.invalid) {
       alert(`${key} is required`);
     }
   });
 }
}
}
