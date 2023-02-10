import { Component } from '@angular/core';

@Component({
  selector: 'app-ubytovani',
  templateUrl: './ubytovani.component.html',
  styleUrls: ['./ubytovani.component.scss'],
})
export class UbytovaniComponent {
  cenik = false;

  openCenik() {
    this.cenik = true;
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');
  }
}
