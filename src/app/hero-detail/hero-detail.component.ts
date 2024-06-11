import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';  // Import Location service
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Hero} from "../../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  standalone: true,
  styleUrls: ['./hero-detail.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location  // Inject Location service
  ) { }

  ngOnInit(): void {
    // Initialization logic here
  }

  goBack(): void {
    this.location.back();  // Implement goBack method
  }

  // Additional methods here
}
