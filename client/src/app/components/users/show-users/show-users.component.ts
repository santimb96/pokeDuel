import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(){
    this._userService.getUsers().subscribe(users=>{
      console.log(users);
    }, error => {
      console.log(error);
    })
  }
}
