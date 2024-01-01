import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor(private asf: AngularFirestore) {}

  onSubmit(formData: { value: { category: any } }) {
    let categoryData = {
      category: formData.value.category,
      status: 'active',
    };
    let subCategoryData = {
      subCategory: 'subCategory1',
    };

    // save data in firebase
    this.asf
      .collection('categories')
      .add(categoryData)
      .then((docref) => {
        this.asf
          .doc(`categories/${docref.id}`)
          .collection('subcategories')
          .add(subCategoryData)
          .then((docref1) => {
            console.log(docref1);

            this.asf
              .doc(`categories/${docref.id}/subcategories/${docref.id}`)
              .collection('subsubcategories')
              .add(subCategoryData)
              .then((docRef2) => {
                console.log(docRef2);
              });
          });
      })
      .catch((err) => {});
  }
}
