import * as faker from 'faker';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { WarriorComponent} from './warrior-component';
import { WarriorInterface } from '../../interfaces/warrior.interface';
import { getFakeWarriorInterface } from '../../interfaces/warrior.interface.spec';

describe('WarriorComponent', () => {
  let comp: WarriorComponent;
  let fixture: ComponentFixture<WarriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WarriorComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should return right warriorClasses when "getWarriorClasses"', () => {
    let fakeWarriorClasses: string[] = [faker.random.word(), faker.random.word()];
    (comp as any).warriorClasses = fakeWarriorClasses;
    fixture.detectChanges();
    let warriorClasses: string[] = comp.getWarriorClasses();
    expect(warriorClasses).toEqual(fakeWarriorClasses);
  });

  it('should return right warriorClasses when "getWeapons"', () => {
    let fakeWeapons: string[] = [faker.random.word(), faker.random.word()];
    (comp as any).weapons = fakeWeapons;
    fixture.detectChanges();
    let weapons: string[] = comp.getWeapons();
    expect(weapons).toEqual(fakeWeapons);
  });

  it('should not have <div> if warriors length is 0', () => {
    fixture.detectChanges();
    let divTemplates: DebugElement[] = fixture.debugElement.queryAll(By.css('div'));
    expect(divTemplates.length).toEqual(0);
  });

  it('should have <div> if warriors length is 1 and the right text', () => {
    fixture.detectChanges();
    let fakeWarrior: WarriorInterface = getFakeWarriorInterface();
    comp.setWarrior(fakeWarrior);
    fixture.detectChanges();
    let divTemplates: DebugElement[] = fixture.debugElement.queryAll(By.css('div'));

    expect(divTemplates.length).toEqual(1);
    const warriorText: string = divTemplates[0].nativeElement.innerText;
    expect(warriorText).toContain(fakeWarrior.name);
    expect(warriorText).toContain(fakeWarrior.warriorClass);
    expect(warriorText).toContain(fakeWarrior.weapon);
    expect(warriorText).toContain(fakeWarrior.description);
  });

});


@Component({
  selector: 'warrior-component',
  template: '<p>Mock Warrior Component</p>'
})
export class MockWarriorComponent extends WarriorComponent{

  public getWarriorClasses(): string[] {
    throw new Error("should 'getWarriorClasses' be spied to be used");
  }

  public getWeapons(): string[] {
    throw new Error("should 'getWeapons' be spied to be used");
  }

  public setWarrior(warrior: WarriorInterface): void {
    throw new Error("should 'setWarrior' be spied to be used");
  }

}