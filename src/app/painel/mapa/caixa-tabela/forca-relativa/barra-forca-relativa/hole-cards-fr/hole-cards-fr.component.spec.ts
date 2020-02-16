import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleCardsFrComponent } from './hole-cards-fr.component';

describe('HoleCardsFrComponent', () => {
  let component: HoleCardsFrComponent;
  let fixture: ComponentFixture<HoleCardsFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleCardsFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleCardsFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
