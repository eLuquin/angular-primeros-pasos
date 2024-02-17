import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse odit dolores tempore id voluptates maxime? Accusantium aperiam adipisci perferendis, ut maxime fuga consequuntur suscipit aliquam, vero mollitia voluptatibus dolorum!
</p>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  decreaseBy(value: number): void{
    this.counter = this.counter - value;
  }

  resetCounter(): void{
    this.counter = 10;
  }

}
