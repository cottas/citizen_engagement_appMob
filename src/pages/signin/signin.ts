import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { User } from "../../models/user";
import { UserRequest } from "../../models/user-request";
import { AuthRequest } from '../../models/auth-request';

import { UsersProvider } from "../../providers/users/users";
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
  authRequest: AuthRequest;
  userRequest: UserRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the name or password is incorrect).
   */
  loginError: boolean;

  /**
   * The login form.
   */
  @ViewChild(NgForm)
  form: NgForm;
    
  profil: User;

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UsersProvider
  ) {
    this.authRequest = new AuthRequest();
    this.userRequest = new UserRequest();
  }

  ionViewDidLoad() {
      
  }
    
  onSubmit($event) {
    // put citizen as default role
    this.userRequest.roles = ['citizen'];
    // Prevent default HTML form behavior.
    $event.preventDefault();

    // Do not do anything if the form is invalid.
    if (this.form.invalid) {
      return;
    }

    // Hide any previous login error.
    this.loginError = false;

    this.authRequest = {name: this.userRequest.name, password: this.userRequest.password};

    this.postUser();

  }
    
  postUser() {
    this.userProvider.postUser(this.userRequest).subscribe(user => {
      console.log(user);
      this.auth.logIn(this.authRequest).subscribe(user => {
        console.log(user);
      }, err => {
        console.log(err);
      });
    }, err => {
      console.warn('Could not create the user:' + err.message);
    });
  }

}
