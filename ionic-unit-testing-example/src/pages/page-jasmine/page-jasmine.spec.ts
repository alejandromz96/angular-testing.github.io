import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from 'ionic-angular/index';
import { PageJasmine } from './page-jasmine.component';

describe('PageJasmine', () => {
  let de: DebugElement;
  let comp: PageJasmine;
  let fixture: ComponentFixture<PageJasmine>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageJasmine],
      imports: [
        IonicModule.forRoot(PageJasmine)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJasmine);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    expect(p.innerText).toContain('Aqui se hablará de jasmine.');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/jasmine-logo.png');
  });
});
