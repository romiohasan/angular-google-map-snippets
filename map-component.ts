import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AgmMap, AgmInfoWindow, MapsAPILoader, LatLngBounds, LatLngBoundsLiteral } from '@agm/core';
import { } from '@types/googlemaps';
import template from './map-component.html';

declare var google: any;

@Component({
  selector: 'map-viewer',
  template
})


export class MyMapComponent implements OnDestroy, OnInit {

  private defaultZoom: number;
  private centerLat: number;
  private centerLng: number;
  private markers: any;

  constructor(private mapsAPILoader: MapsAPILoader) {
    this.defaultZoom = 11;
    this.centerLat = 52.46;
    this.centerLng = 13.35;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  initMap(e){

  } // end fn initMap

  handleMapClick(e){

  } // end fn initMap

  handleMarkerClick(e){

  } // end fn handleMarkerClick

  handleInfoWindowClose(){

  } // end fn handleInfoWindowClose

  ngOnDestroy() {

  } // end fn ngOnDestroy


}
// end class MyMapComponent
