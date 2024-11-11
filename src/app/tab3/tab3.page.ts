import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {

  latitude: number = 23.990544631997356;  // Nueva latitud
  longitude: number = -104.61763261504653; // Nueva longitud

  private map: any;

  constructor(private router: Router) {} // Inyecta el servicio Router

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Crear el mapa y centrarlo en la nueva ubicación
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 15
    });

    // Cargar los mosaicos de Mapbox con un estilo oscuro
    const accessToken = 'pk.eyJ1IjoiYmVybmExMDEwIiwiYSI6ImNtMmNocTloYjE1MGUya242dmhydzk4Y3IifQ.DB86BQe9D-pXQvjGCR1YnA';
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      maxZoom: 19,
      tileSize: 512,
      zoomOffset: -1,
      attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
    }).addTo(this.map);

    // Agregar un marcador rojo y pequeño
    const markerIcon = L.icon({
      iconUrl: 'https://img.icons8.com/emoji/48/000000/red-circle-emoji.png', // Icono rojo
      iconSize: [25, 25], // Tamaño pequeño del icono
      iconAnchor: [12, 25], // Punto de anclaje del icono en el mapa
      popupAnchor: [0, -25] // Punto de aparición del popup respecto al icono
    });

    // Agregar el marcador en la nueva ubicación
    L.marker([this.latitude, this.longitude], { icon: markerIcon }).addTo(this.map)
      .bindPopup('Ubicación')
      .openPopup();

    // Asegurar que el mapa se redimensione correctamente después de cargarse
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }

  navigateToTab3() {
    this.router.navigate(['/tabs/tab3']);
  }
}
