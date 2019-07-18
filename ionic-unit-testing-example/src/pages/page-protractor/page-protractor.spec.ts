import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from 'ionic-angular/index';
import { PageProtractor } from './page-protractor.component';

describe('PageProtractor', () => {
  let de: DebugElement;
  let comp: PageProtractor;
  let fixture: ComponentFixture<PageProtractor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageProtractor],
      imports: [
        IonicModule.forRoot(PageProtractor)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProtractor);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    expect(p.innerText).toContain('Aqui se hablará de protractor.');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/protractor-logo.png');
  });
});
