import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from 'ionic-angular/index';
import { PageAngular } from './page-angular.component';

describe('PageAngular', () => {
  let de: DebugElement;
  let comp: PageAngular;
  let fixture: ComponentFixture<PageAngular>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageAngular],
      imports: [
        IonicModule.forRoot(PageAngular)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAngular);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    expect(p.innerText).toContain("Aqui se hablará de angular.");
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/angular-logo.png');
  });
});
