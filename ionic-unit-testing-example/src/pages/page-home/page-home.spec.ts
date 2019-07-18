import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from 'ionic-angular/index';
import { PageHome } from './page-home.component';

describe('PageHome', () => {
  let de: DebugElement;
  let comp: PageHome;
  let fixture: ComponentFixture<PageHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageHome],
      imports: [
        IonicModule.forRoot(PageHome)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    expect(p.innerText).toContain('Bienvenido a la aplicación del TFG de Alejandro Muñoz del Prado.');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/home-logo.png');
  });
});
