import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit{

  //injecting the service
  private userService = inject(UserServiceService);

  //variable to store the user
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);

  public userWasFound = signal(true);

  public fullName =  computed<string>(()=>{
    if(!this.currentUser()){
      return `User wasn't found`;
    }

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  })

  ngOnInit(): void {
      this.loadUser(this.userId());
  }

  loadUser(id:number): void {

    if(id <=0){
      console.error('Invalid id');
      return;
    }
    //Set id to signal before validate (id <= 0).
    this.userId.set(id);

    //Set current user to undefined , it be more fast than wait the response.
    this.currentUser.set(undefined);

    this.userService.getUserById(id)
    .subscribe(
      {
        next: (user: User) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);

        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        },
        complete: () => {
          console.log('Request completed');
        }
      }
    );
  }

}
