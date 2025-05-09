import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  private map: L.Map | undefined;
  lat = '';
  lng = '';

  async ngOnInit() {
    const coords = await Geolocation.getCurrentPosition();
    this.lat = coords.coords.latitude.toFixed(5);
    this.lng = coords.coords.longitude.toFixed(5);

    this.map = L.map('map').setView([+this.lat, +this.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([+this.lat, +this.lng])
      .addTo(this.map)
      .bindPopup('Your Location')
      .openPopup();
  }
}
