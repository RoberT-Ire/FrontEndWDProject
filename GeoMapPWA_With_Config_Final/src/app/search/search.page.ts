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

  constructor(private http: HttpClient, private storageService: StorageService) {}

  async ngOnInit() {
    const last = await this.storageService.getLastSearch();
    if (last) {
      this.query = last;
    }
  }

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
