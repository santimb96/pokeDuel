import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(id: any){
    this._userService.deleteUser(id).subscribe( user => {
      console.log(user);
    }, error => {
      console.log(error);
    })
  }

}
