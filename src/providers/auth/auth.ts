import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  items:any;
  constructor(public http: HttpClient,public afAuth: AngularFireAuth,private afs: AngularFirestore) {
    console.log('Hello AuthProvider Provider');
  }
  signInWithEmail(credentials) {
		console.log('Sign in with email');
		//return this.afAuth.auth.signInWithEmailAndPassword
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password).catch(res=>{return res.json()});
      
  }
  
  // getAuth(){
  //   return this.afAuth.authState.map(auth=>auth);
  // }
  getItems(){
    let itemsCollection = this.afs.collection<any>('items');
    this.items = itemsCollection.valueChanges();
    return this.items;
  }
  addItem(){
    const shirtsCollection = this.afs.collection<any>('items');
    shirtsCollection.add({ name: 'ouael1233333333333'});
  }
  logout(){
    return this.afAuth.auth.signOut();
  }
}
