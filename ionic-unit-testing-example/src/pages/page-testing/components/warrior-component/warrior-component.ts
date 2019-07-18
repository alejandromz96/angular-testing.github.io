import { Component } from '@angular/core';
import { WarriorInterface } from '../../interfaces/warrior.interface';

@Component({
  selector: 'warrior-component',
  templateUrl: 'warrior-component.html'
})
export class WarriorComponent {

  private warriorClasses: string[] = ["Luchador", "Mago", "Paladin", "Sacerdote", "Cazador"];

  private weapons: string[] = ["Gran espada", "Espadas dobles", "Arco", "Maza", "Espada larga", "Hacha", "Báculo"];

  private warriors: WarriorInterface[] = [];

  constructor() {

  }

  public getWarriorClasses(): string[] {
    return this.warriorClasses;
  }

  public getWeapons(): string[] {
    return this.weapons;
  }

  public setWarrior(warrior: WarriorInterface): void {
    this.warriors.push(warrior);
  }

}