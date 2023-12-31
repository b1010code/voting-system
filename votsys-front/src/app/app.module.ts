import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { VotingComponent } from './component/voting/voting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { VoteEditComponent } from './component/vote-edit/vote-edit.component';
import { LayoutService } from './service/layout.service';
import { LayoutCandidateService } from './service/layout-candidate.service';
import { SumChboxComponent } from './component/sum-chbox/sum-chbox.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    MenuComponent,
    FooterComponent,
    VoteEditComponent,
    SumChboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [LayoutService, LayoutCandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
