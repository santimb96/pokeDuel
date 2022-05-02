import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router'
import {FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userForm: FormGroup
  id: string | null;
  constructor(private fb: FormBuilder, public router: Router, private _userService: UserService, private aRouter: ActivatedRoute) { 
    this.id = this.aRouter.snapshot.paramMap.get('id'); //tiene que coincidir con el nombre del parametro que le pasamos por app-routing.module.ts
  }

  ngOnInit(): void {
  }

  deleteUser(id: any){
    this._userService.deleteUser(id).subscribe( user => {
      console.log(user);
    }, error => {
      console.log(error);
    })
  }

  showUser(){
    if(this.id !== null){
      this._userService.showUser(this.id).subscribe(data => {
        this.userForm.setValue({
            username: data.username,
            password: data.password,
            email: data.email,
            avatar: data.avatar,
        })
      })
    }
  }

  editUser(){
    const user: User = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email: this.userForm.get('email')?.value,
      avatar: this.userForm.get('avatar')?.value,
    }
    
    if(this.id !== null){
      this._userService.editUser(this.id, user).subscribe(data => {
        console.log("Edited");
      }, error => {
      console.log(error);
    })
    }
  }
}
