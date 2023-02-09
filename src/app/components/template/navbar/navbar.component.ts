import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showNavbar = false;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }  

  scrollToContact() {
    this.toggleNavbar()
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        document.querySelector('#kontakt')!.scrollIntoView({ behavior: 'smooth' });
      }, 10);
    });
  }
}
