// This component allows the user to search for any destination using a text input.
// It uses the OpenStreetMap API to find the place and shows the first result.
// It also saves the last searched location locally using the storage service.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  query = '';
  result = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  // When the page loads, it checks if there is a saved search
  // If there is, it fills it into the input so the user can search again
  async ngOnInit() {
    const last = await this.storageService.getLastSearch();
    if (last) {
      this.query = last;
    }
  }

  // This function sends the user's search term to the OpenStreetMap API
  // It then displays the first result and saves it for next time
  search() {
    if (!this.query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.query)}`;

    this.http.get<any[]>(url).subscribe(async data => {
      if (data.length > 0) {
        this.result = data[0].display_name;
        await this.storageService.setLastSearch(this.query);
      } else {
        this.result = 'No results found';
      }
    });
  }
}
