import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

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
        this.toastr.success('Data Insert Successfully!')
      })
      .catch((err) => {});
  }
}
