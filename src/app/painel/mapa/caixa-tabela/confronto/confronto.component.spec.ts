import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontoComponent } from './confronto.component';

describe('ConfrontoComponent', () => {
  let component: ConfrontoComponent;
  let fixture: ComponentFixture<ConfrontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
