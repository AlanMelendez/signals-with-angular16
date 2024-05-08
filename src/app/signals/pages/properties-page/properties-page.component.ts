import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {
  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  //Effect 1
  public userEffectChange = effect(() => {
    console.log('trigger userChangeEffect');
    console.log(this.user());
    this.userEffectChangeCounter() +1;

    console.log('userEffectChangeCounter', this.userEffectChangeCounter());
  });

  //Create a signal of the counter value of our usserEffectChange.
  public userEffectChangeCounter = signal<number>(10);

  public user = signal<User>(
    {
      id: 1,
      last_name: 'Doe',
      email: 'john@doe.com',
      first_name: 'John',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    }
  );

  ngOnInit() {
    // setInterval(() => {
    //   this.increaseBy(1);

    //   console.log('alo alo');
    // },1000);
  }
  ngOnDestroy() {
    this.userEffectChange.destroy();
  }
  increaseBy(value:number){
    this.userEffectChangeCounter.update((counter) => counter + value);
  }

  onFieldUpdated(field: keyof User, value:string){
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    // this.user.update((user) => ({
    //   ...user,
    //   [field]: value
    // }));

    this.user.update((user: User) => {
      switch (field) {
        case 'first_name':
          user.first_name = value;
          break;
        case 'last_name':
          user.last_name = value;
          break;
        case 'email':
          user.email = value;
          break;
        case 'avatar':
          user.avatar = value;
          break;
        case 'id':
          user.id = parseInt(value);
          break;
      }

      return user;
    });
  }
}
