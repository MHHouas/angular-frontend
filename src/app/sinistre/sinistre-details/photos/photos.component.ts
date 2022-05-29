import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/models/photo';
import { PhotoService } from 'src/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() sinistreId!: number;

  photos!: Photo[];
  p!: String[];

  constructor(private photoService: PhotoService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  selectedFile!: File;
  imgURL: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('photoFile', this.selectedFile, this.selectedFile.name);
    this.photoService.uploadPhoto(uploadImageData,this.sinistreId)
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'La photo a été ajoutée.';
          this.getPhotos();
        } else {
          this.message = 'La photo n\'a pas été ajoutée.';
        }
      }
      );
  }

  getPhotos() {
    this.photoService.getPhotosList(this.sinistreId)
      .subscribe(
        res => {
          this.photos=res;
          this.p = [];
          for (let photo of this.photos) {
            /*let base64Data = photo.picByte;
            let retrievedPhoto = 'data:image/jpeg;base64,' + base64Data;
            this.p.push(retrievedPhoto)*/
            photo.picByte = 'data:image/jpeg;base64,' + photo.picByte;
          }
        }
      );
  }

  deletePhoto(id: number){
    this.photoService.deletePhoto(id).subscribe( data => {
      console.log(data);
      this.getPhotos();
    })
  }

}
