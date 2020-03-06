import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { HerosService } from "./services/heros.service";

//Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./views/home/home.component";
import { HerosComponent } from "./views/heros/heros.component";
import { AboutComponent } from "./views/about/about.component";
import { HeroComponent } from './views/hero/hero.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		HerosComponent,
		AboutComponent,
		HeroComponent
	],
	imports: [BrowserModule, APP_ROUTING],
	providers: [HerosService],
	bootstrap: [AppComponent]
})
export class AppModule {}
