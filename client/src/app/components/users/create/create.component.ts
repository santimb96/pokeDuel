import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb: FormBuilder, public router: Router) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      avatar: [''],
    })
  }

  ngOnInit(): void {
  }

  createUser():void {
    console.log(this.userForm);

    const user: User = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email: this.userForm.get('email')?.value,
      avatar: this.userForm.get('avatar')?.value,
    }

    console.log(user)
  }

}
