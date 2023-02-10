import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scroll(id: string) {
    const element = document.getElementById(id)!;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
