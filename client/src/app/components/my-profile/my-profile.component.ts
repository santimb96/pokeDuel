import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router'
import {FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router'

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

  editUser(){
    if(this.id !== null){
      this._userService.editUser(this.id).subscribe(data => {
        this.userForm.setValue({
            username: data.username,
            password: data.password,
            email: data.email,
            avatar: data.avatar,
        })
      })
    }
  }
}
