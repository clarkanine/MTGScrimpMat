import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDeckViewerComponent } from './player-deck-viewer.component';

describe('PlayerDeckViewerComponent', () => {
  let component: PlayerDeckViewerComponent;
  let fixture: ComponentFixture<PlayerDeckViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDeckViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDeckViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
