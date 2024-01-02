import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent implements OnInit {
  permalink: string = '';
  imgSrc: any = './assests/placeholder-image.jpg';
  selectedImg: any;

  categories: Array<object>;

  constructor(private category: CategoriesService) {}

  ngOnInit(): void {
    this.category.loadData().subscribe((val: any) => {
      this.categories = val;
    });
  }

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
