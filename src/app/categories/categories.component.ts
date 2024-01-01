import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categoryArray: Array<object> | any;
  formCategory: string;
  formStatus: string = 'Add';
  categoryId: string;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((val) => {
      this.categoryArray = val;
    });
  }

  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    if (this.formStatus == 'Add') {
      this.categoryService.saveData(categoryData);
      formData.reset();
    } else if (this.formStatus == 'Edit') {
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus = 'Add';
    }

    this.categoryService.saveData(categoryData);

    formData.reset();
    // let subCategoryData = {
    //   subCategory: 'subCategory1',
    // };

    // save data in firebase with subcategories
    // this.asf
    //   .collection('categories')
    //   .add(categoryData)
    //   .then((docref) => {
    //     this.asf
    //       .doc(`categories/${docref.id}`)
    //       .collection('subcategories')
    //       .add(subCategoryData)
    //       .then((docref1) => {
    //         console.log(docref1);

    //         this.asf
    //           .doc(`categories/${docref.id}/subcategories/${docref.id}`)
    //           .collection('subsubcategories')
    //           .add(subCategoryData)
    //           .then((docRef2) => {
    //             console.log(docRef2);
    //           });
    //       });
    //   })
    //   .catch((err) => {});
  }

  onEdit(category: any, id: any) {
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryId = id;
  }

  onDelete(id: any) {
    this.categoryService.deleteData(id);
  }
}
