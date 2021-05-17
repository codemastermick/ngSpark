import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'any',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  getDocumentsAt(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  createTask(collection: string, data: any) {
    return this.firestore.collection(collection).add(Object.assign({}, data));
  }

  updateTask(collection: string, docId:string, data: any) {
    this.firestore.doc(collection + '/' + docId).update(data);
  }

  deleteTask(collection: string, docId: string) {
    this.firestore.doc(collection + '/' + docId).delete();
  }
}
