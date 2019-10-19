import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaLateralComponent } from './caixa-lateral.component';

describe('CaixaLateralComponent', () => {
  let component: CaixaLateralComponent;
  let fixture: ComponentFixture<CaixaLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
