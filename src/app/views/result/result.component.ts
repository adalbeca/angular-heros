import { Component, OnInit } from "@angular/core";
import { HerosService } from "../../services/heros.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-result",
	templateUrl: "./result.component.html",
	styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
	heros: any[] = [];
	terms: string;
	constructor(
		private heroService: HerosService,
		private activateRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activateRoute.params.subscribe(params => {
			console.log(params);
			this.heros = this.heroService.searchHeros(params["hero"]);
			this.terms = params["hero"];
			console.log(this.heros);
		});
	}

	showHero(idx: number) {
		this.router.navigate(["/hero", idx]);
	}
}
