import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {


  public counter = signal(1);

  public squareCounter = computed(() => this.counter() * this.counter());


  increaseBy(increment: number) {
    // this.counter.set(this.counter() + 1);
    // this.counter.next(this.counter.value + 1);

    this.counter.update((value) => value + increment);
  }

}
