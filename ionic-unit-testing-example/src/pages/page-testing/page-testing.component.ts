import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WarriorComponent } from './components/warrior-component/warrior-component';
import { WarriorInterface } from './interfaces/warrior.interface';

@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'page-testing.html'
})
export class PageTesting implements OnInit {
  @ViewChild("warriorComponent") warriorComponent: WarriorComponent;
  
  public warriorClasses: string[] = [];
  public weapons: string[] = [];

  public defaultWarrior: WarriorInterface = {
    name:"",
    warriorClass:"",
    weapon:"",
    description:""
  };

  public warrior: WarriorInterface = JSON.parse(JSON.stringify(this.defaultWarrior));
  public nameProvided: boolean = false;

  constructor(public navCtrl: NavController) {}
  
  ngOnInit() {
    this.warriorClasses = this.warriorComponent.getWarriorClasses();
    this.weapons = this.warriorComponent.getWeapons();
  }

  createWarrior(): void {
    if (this.warrior.name === "") {
      this.nameProvided = true;
    } else {
      this.nameProvided = false;
      this.warriorComponent.setWarrior(JSON.parse(JSON.stringify(this.warrior)));
      this.warrior = JSON.parse(JSON.stringify(this.defaultWarrior));
    }
  }
}
