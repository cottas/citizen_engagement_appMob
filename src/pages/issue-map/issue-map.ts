import { Issue } from "../../models/issue";
import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {latLng, Map, MapOptions, Marker, tileLayer} from 'leaflet';
import {IssuesProvider} from '../../providers/issues/issues';
import { IssueDetailsPage } from "../issue-details/issue-details";
import * as L from "leaflet";

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
  extendedMarker = L.Marker.extend({
    initialize: function(id) {
      this.id = id;
    }
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public issues: IssuesProvider, public modalCtrl: ModalController) {
    this.mapOptions = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18})
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };
  }

  onClickMarker(element) {
    console.log(element.id);
    this.issues.getIssue(element.id).subscribe(issue => {
      console.log(issue);
      this.openModal(issue);
    });
  }
    
  onMapReady(map: Map) {
    this.map = map;
    this.issues.getIssues(50).subscribe(data => {
      this.mapMarkers = [];
      data.forEach(element => {
        //console.log(element);
        const newMarker = L.marker([element.location.coordinates[1], element.location.coordinates[0]]).on('click', () => {
        this.onClickMarker(element);
      }).bindTooltip(element.description);
        this.mapMarkers.push(newMarker);
      });
    });
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }
  
  openModal(issue: Issue){
   let profileModal = this.modalCtrl.create(IssueDetailsPage, {selected_issue:issue});
   profileModal.present();
  }
}























