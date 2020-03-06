import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { AboutComponent } from "./views/about/about.component";
import { HerosComponent } from "./views/heros/heros.component";
import { HeroComponent } from "./views/hero/hero.component";
import { ResultComponent } from "./views/result/result.component";

const APP_ROUTES: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "heros", component: HerosComponent },
	{ path: "hero/:id", component: HeroComponent },
	{ path: "results/:hero", component: ResultComponent },
	{ path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
