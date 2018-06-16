import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatTabsModule
       } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentGameComponent } from './current-game/current-game.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerServiceService } from 'src/app/player-service.service';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { CardFinderComponent } from './card-finder/card-finder.component';
import { CardService } from './card.service';
import { HelpComponent } from './help/help.component';
import { AuthService } from './auth.service';

import { ProfileComponent } from './profile/profile.component';
import { Md5 } from 'ts-md5/dist/md5';
import { PlayerDeckViewerComponent } from './player-deck-viewer/player-deck-viewer.component';

const appRoutes: Routes = [
  {
    path:'current-game',
    component: CurrentGameComponent
  },
  {
    path:'player-list',
    component: PlayerListComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'help',
    component: HelpComponent
  },
  {
    path:'callback',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CurrentGameComponent,
    PlayerListComponent,
    PlayerFormComponent,
    PlayerDialogComponent,
    CardFinderComponent,
    HelpComponent,
    ProfileComponent,
    PlayerDeckViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [
    AuthService,
    PlayerServiceService,
    CardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PlayerDialogComponent]
})
export class AppModule { }
