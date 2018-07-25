import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading:any;
  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController,public authService:AuthProvider) {

  }
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loading.present();
 
  }
  handleLogin(f){
    this.showLoader();
    let credentials = {
			email: f.value.email,
			password: f.value.password
    };
    // this.authService.getItems().subscribe(res=>{
    //   console.log(res);
    // });
    this.authService.addItem();
    this.authService.signInWithEmail(credentials).then((res)=>{console.log(res);this.loading.dismiss()
      // this.authService.getAuth().subscribe(res=>{
      //   console.log(res);
      // })
      console.log("addd");
      this.authService.addItem();
      //this.authService.logout();
      //this.authService.addItem();
    },error=>{console.log("error");this.loading.dismiss()});
    this.authService.logout().then(()=>{
      console.log("logout");
      this.authService.addItem();

    });
    
  }
}
