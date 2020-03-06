import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HerosService } from "./../../services/heros.service";

@Component({
	selector: "app-hero",
	templateUrl: "./hero.component.html"
})
export class HeroComponent implements OnInit {
	hero: any = {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private _hero: HerosService
	) {
		this.activatedRoute.params.subscribe(
			params => (this.hero = this._hero.getHero(params["id"]))
		);
	}

	ngOnInit(): void {}
}
