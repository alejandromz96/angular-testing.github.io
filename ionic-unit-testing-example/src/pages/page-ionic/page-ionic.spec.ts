import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from 'ionic-angular/index';
import { PageIonic } from './page-ionic.component';

describe('PageIonic', () => {
  let de: DebugElement;
  let comp: PageIonic;
  let fixture: ComponentFixture<PageIonic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageIonic],
      imports: [
        IonicModule.forRoot(PageIonic)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIonic);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    expect(p.innerText).toContain('Aqui se hablará de ionic.');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/ionic-logo.png');
  });
});
