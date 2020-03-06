import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { AboutComponent } from "./views/about/about.component";
import { HerosComponent } from "./views/heros/heros.component";
import { HeroComponent } from "./views/hero/hero.component";

const APP_ROUTES: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "heros", component: HerosComponent },
	{ path: "hero/:id", component: HeroComponent },
	{ path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
