import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { TitleComponent } from './Title/title.component';
import { UserService } from './User/user.service';

/* Contact Imports */
import { ContactModule }      from './contact/contact.module';
/* Routing Module */
import { AppRoutingModule }   from './app-routing.module.3';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    FormsModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
