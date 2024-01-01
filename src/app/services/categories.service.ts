import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private asf: AngularFirestore) {}

  saveData(data: any) {
    
    this.asf
      .collection('categories')
      .add(data)
      .then((docref) => {
        console.log(docref);
      })
      .catch((err) => {});
  }
}
