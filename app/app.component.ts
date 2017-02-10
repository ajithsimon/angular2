import { Component } from '@angular/core';

export class Hero{
    id: number;
    name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
    selector: 'my-app',
    template: `
    <h3>{{title}}</h3>
    <h4>My heroes</h4>
    <ul class="list-group">
        <li class="list-group-item" *ngFor=>
           
        </li>
      </ul>

    <h4>{{hero.name}} details!</h4>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})
export class AppComponent  { 
    title = 'Employee list'; 
    heroes = HEROES;
    hero: Hero = { id: 1, name: 'Ajith' };
}
