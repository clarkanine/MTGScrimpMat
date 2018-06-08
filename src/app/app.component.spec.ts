import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { CurrentGameComponent } from './current-game/current-game.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { PlayerFormComponent } from './player-form/player-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyNavComponent,
        CurrentGameComponent,
        PlayerDialogComponent,
        PlayerFormComponent,
        PlayerListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MtgScrimpMat!');
  }));
});
