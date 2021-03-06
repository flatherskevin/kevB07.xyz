
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent }  from './app.component';
import { FlippersComponent } from './flippers/flippers.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule
	],
	declarations:[
		AppComponent,
		FlippersComponent,
		NaviComponent
	],
	bootstrap:[ AppComponent ]
})
export class AppModule { }