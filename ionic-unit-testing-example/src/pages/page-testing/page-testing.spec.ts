import * as faker from 'faker';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PageTesting } from './page-testing.component';
import { WarriorInterface } from './interfaces/warrior.interface';
import { getFakeWarriorInterface } from './interfaces/warrior.interface.spec';
import { MockWarriorComponent } from './components/warrior-component/warrior-component.spec';
import { NavController, IonicModule } from 'ionic-angular';

describe('PageTesting', () => {
  let comp: PageTesting;
  let fixture: ComponentFixture<PageTesting>;
  let fakeWarriorClasses: string[];
  let fakeWeapons: string[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageTesting,
        MockWarriorComponent,
      ],
      imports: [
        IonicModule.forRoot(PageTesting)
      ],
      providers: [
        NavController
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PageTesting);
      comp = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    
    fakeWarriorClasses = [faker.random.word(), faker.random.word()]
    spyOn(comp.warriorComponent, "getWarriorClasses").and.returnValue(fakeWarriorClasses);
    
    fakeWeapons = [faker.random.word(), faker.random.word()]
    spyOn(comp.warriorComponent, "getWeapons").and.returnValue(fakeWeapons);
    
    fixture.detectChanges();
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should call "getWarriorClasses" and "getWeapons" when onInit', () => {
    expect(comp.warriorComponent.getWarriorClasses).toHaveBeenCalled();
    expect(comp.warriorComponent.getWeapons).toHaveBeenCalled();
  });

  it('should invoke "setWarrior" with right parameters when warrior have value and click', () => {    
    spyOn(comp.warriorComponent, "setWarrior").and.returnValue(null);
    let fakeWarrior: WarriorInterface = getFakeWarriorInterface();
    comp.warrior = fakeWarrior;
    let createWarriorButton = fixture.debugElement.query(By.css('.testingButton'));
    createWarriorButton.triggerEventHandler("click", null);
    expect(comp.warriorComponent.setWarrior).toHaveBeenCalledWith(fakeWarrior);
  });

});