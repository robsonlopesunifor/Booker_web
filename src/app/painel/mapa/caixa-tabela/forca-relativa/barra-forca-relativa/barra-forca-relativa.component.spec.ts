import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraForcaRelativaComponent } from './barra-forca-relativa.component';

describe('BarraForcaRelativaComponent', () => {
  let component: BarraForcaRelativaComponent;
  let fixture: ComponentFixture<BarraForcaRelativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraForcaRelativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraForcaRelativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
