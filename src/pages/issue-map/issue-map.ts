import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';
import { IssuesProvider } from '../../providers/issues/issues';

/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-map',
  templateUrl: 'issue-map.html',
})
export class IssueMapPage {
    map: Map;
    mapMarkers: Marker[];
    mapOptions: MapOptions;

    constructor(public navCtrl: NavController, public navParams: NavParams, public issues: IssuesProvider) {
        this.mapOptions = {
            layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
            ],
            zoom: 13,
            center: latLng(46.778186, 6.641524)
        };
    }

    ionViewDidLoad() {
        this.issues.getIssues(50).subscribe(data => {
            this.mapMarkers = [];
            data.forEach(element => {
                const newMarker = marker([element.location.coordinates[1],element.location.coordinates[0]]).on('click', this.onClickMarker);
                this.mapMarkers.push(newMarker);
            });
        });
    }
    
    onClickMarker(event){
        alert("hi. you clicked the marker at " + event.latlng);
    }

    onMapReady(map: Map) {
        this.map = map;
        this.map.on('moveend', () => {
            const center = this.map.getCenter();
            console.log(`Map moved to ${center.lng}, ${center.lat}`);
        });
    }
}























