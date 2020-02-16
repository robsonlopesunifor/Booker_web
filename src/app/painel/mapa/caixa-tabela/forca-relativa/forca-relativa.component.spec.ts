import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaRelativaComponent } from './forca-relativa.component';

describe('ForcaRelativaComponent', () => {
  let component: ForcaRelativaComponent;
  let fixture: ComponentFixture<ForcaRelativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcaRelativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcaRelativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
