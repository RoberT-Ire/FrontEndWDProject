// This component is the main screen of the app. It shows the user's current location on a map.
// It uses the Capacitor Geolocation plugin to get the coordinates and Leaflet to render the map.
// The coordinates are also displayed to the user above the map.

import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class HomePage implements OnInit {
  private map: L.Map | undefined;
  lat = '';
  lng = '';

  // When the page is initialized, this gets the user's current coordinates
  // and loads the map centered on that location
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
