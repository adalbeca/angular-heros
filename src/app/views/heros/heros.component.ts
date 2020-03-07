import { Component, OnInit } from "@angular/core";
import { HerosService, Hero } from "./../../services/heros.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-heros",
	templateUrl: "./heros.component.html",
	styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
	heros: Hero[] = [];
	constructor(private _herosService: HerosService, private router: Router) {}

	ngOnInit(): void {
		this.heros = this._herosService.getHeros();
	}

	showHero(index: number) {
		this.router.navigate(["/hero", index]);
	}
}
