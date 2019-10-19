import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaCabecarioComponent } from './caixa-cabecario.component';

describe('CaixaCabecarioComponent', () => {
  let component: CaixaCabecarioComponent;
  let fixture: ComponentFixture<CaixaCabecarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaCabecarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaCabecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
