import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  permalink: string = '';
  imgSrc: any = './assests/placeholder-image.jpg';
  selectedImg: any;

  onTitleChange($event: any) {
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
}
