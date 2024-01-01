import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private asf: AngularFirestore, private toastr: ToastrService) {}

  saveData(data: any) {
    this.asf
      .collection('categories')
      .add(data)
      .then((docref) => {
        this.toastr.success('Data Insert Successfully!');
      })
      .catch((err) => {});
  }

  loadData() {
    return this.asf
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  async updateData(id: any, EditData: any) {
    (await this.asf.collection('categories').add(`categories/${id}`))
      .update(EditData)
      .then((docRef) => {
        this.toastr.success('Data Updated Successfully!');
      });
  }

  deleteData(id: any) {
    this.asf
      .collection('categories')
      .doc(`categories/${id}`)
      .delete()
      .then((docRef) => {
        this.toastr.success('Data deleted successfully.');
      });
  }
}
