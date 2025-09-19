import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
  standalone: false,
})
export class MapsPage implements OnInit {
  map!: L.Map;

  constructor() {}

  ngOnInit() {
    const iconRetinaUrl = 'assets/icon/marker.png';
    const iconUrl = 'assets/icon/marker.png';
    const shadowUrl = 'assets/icon/marker.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;

    if (!this.map) {
      setTimeout(() => {
        this.map = L.map('map').setView([-7.7956, 110.3695], 13);

        let osm = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: '&copy; OpenStreetMap contributors',
          }
        );

        osm.addTo(this.map);
        L.marker([-7.7956, 110.3695])
          .addTo(this.map)
          .bindPopup('yogyakarta')
          .openPopup();
      });
    }
  }
}
