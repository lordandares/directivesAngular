import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralTestDirective } from './directives/structural-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    StructuralTestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
