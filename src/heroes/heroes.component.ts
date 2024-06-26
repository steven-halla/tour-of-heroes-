import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeroService} from "../app/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone: true,
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
