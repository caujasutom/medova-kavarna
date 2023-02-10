import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showNavbar = false;
  toggleNavbar() {
    if (window.scrollY == 0 && !this.showNavbar) {
      this.renderer.addClass(
        this.el.nativeElement.querySelector('header'),
        'active'
      );
          this.showNavbar = !this.showNavbar;
      return;
    } else if (window.scrollY == 0 && this.showNavbar) {
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('header'),
        'active'
      );
      this.showNavbar = !this.showNavbar;
      return;
    }
    this.showNavbar = !this.showNavbar;
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        this.renderer.addClass(
          this.el.nativeElement.querySelector('header'),
          'active'
        );
      } else {
        if (!this.showNavbar) {
          this.renderer.removeClass(
            this.el.nativeElement.querySelector('header'),
            'active'
          );
        }
      }
    });
  }
  scroll(id: string) {
    this.toggleNavbar();
    const element = document.getElementById(id)!;
    element.scrollIntoView({ behavior: 'smooth' });
  }
  test(sectionId: string) {
    event!.preventDefault();
    const element = document.getElementById(sectionId)!;
    window.location.replace(`#${sectionId}`);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
