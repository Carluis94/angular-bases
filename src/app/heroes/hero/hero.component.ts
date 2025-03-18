import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:  number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  getHeroDescripcion(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'hulk';
  }

  changeAge(): void{
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }

}
