import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Ranks } from './components/ranks/ranks';
import { Regulations } from './components/regulations/regulations';
import { Join } from './components/join/join';
import { ApplicationForm } from './components/application-form/application-form';
import { Footer } from './components/footer/footer';
import { Units } from './components/units/units';
import { PoliceExam } from './components/police-exam/police-exam';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    Ranks,
    Regulations,
    Join,
    ApplicationForm,
    Footer,
    Units,
    PoliceExam,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
