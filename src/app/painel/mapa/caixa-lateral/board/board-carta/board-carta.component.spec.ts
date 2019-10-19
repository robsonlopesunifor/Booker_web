import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCartaComponent } from './board-carta.component';

describe('BoardCartaComponent', () => {
  let component: BoardCartaComponent;
  let fixture: ComponentFixture<BoardCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
