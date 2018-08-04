import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { AlertService,RegisterService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		ListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		RegisterService,
		AlertService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
