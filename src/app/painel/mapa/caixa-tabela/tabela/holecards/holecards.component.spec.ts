import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolecardsComponent } from './holecards.component';

describe('HolecardsComponent', () => {
  let component: HolecardsComponent;
  let fixture: ComponentFixture<HolecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
