import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fotogalerie',
  templateUrl: './fotogalerie.component.html',
  styleUrls: ['./fotogalerie.component.scss'],
})
export class FotogalerieComponent {
  fotky: string[] = [];
  private baseUrl = environment.apiEndpoint + 'fotky.php';
  constructor(private http: HttpClient) {
    this.getFotky();
  }
  getFotky() {
    this.http.get<string[]>(this.baseUrl).subscribe((key) => {
      this.fotky = key;
    });
  }
}
