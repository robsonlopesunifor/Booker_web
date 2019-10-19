import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinalComponent } from './sinal.component';

describe('SinalComponent', () => {
  let component: SinalComponent;
  let fixture: ComponentFixture<SinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
