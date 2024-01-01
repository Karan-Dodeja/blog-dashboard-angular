import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor(private categoryService: CategoriesService) {}

  onSubmit(formData: { value: { category: any } }) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    this.categoryService.saveData(categoryData);

    // let subCategoryData = {
    //   subCategory: 'subCategory1',
    // };

    // save data in firebase
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
}
