import { Component,ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ViewmorePage } from '../viewmore/viewmore';
// import { SearchPage } from '../search/search';
import { ViewChild } from '@angular/core';
import { HubsProvider } from '../../providers/hubs/hubs';
import { Slides } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { ViewmorePage } from '../viewmore/viewmore';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  @ViewChild('map') mapRef: ElementRef;
  images = [
    { image: '../../assets/imgs/South-African-Parliament-AT-1030x691.jpg' },
    { image: '../../assets/imgs/Austria_Parlament_Front.jpg' },
    { image: '../../assets/imgs/unnamed.jpg' },
    { image: '../../assets/imgs/South-African-Parliament-AT-1030x691.jpg' },
    { image: '../../assets/imgs/Austria_Parlament_Front.jpg' },
  ]
  icons = [
    {
      image: 'ios-briefcase',
      name: 'job'
    },
    { image: 'pie' ,
    name: 'Programes'
  },
    { image: 'wifi',
    name: 'Wi-Fi Hotspot'
  },
    { image: 'ios-people', 
    name: 'Services'
  },
  ]
  catescrollist = ['Business', 'Relationships', 'Life', 'Love', 'Wealth']
  constructor(public navCtrl: NavController,public hub:HubsProvider) {


    this.hub.getJobs().then((data:any)=>{
      console.log(data)
    })
    this.hub.getPrograme().then((data:any)=>{
      console.log(data)
    })
    this.hub.getServices().then((data:any)=>{
      console.log(data)
    })
  }
  viewAll() {
    this.navCtrl.push(ViewmorePage)
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
  //mappag switch
  mapswitch(){
    var maincontent = document.getElementById('maincontent')
    var mapcontent = document.getElementById('mapcontent')
    if (maincontent.style.display == "flex") {
      console.log(`if`);
      maincontent.style.display = "none"
      mapcontent.style.display = "block"
    } else if (maincontent.style.display == "none") {
      console.log(`else if`);
      maincontent.style.display = "block"
      mapcontent.style.display = "none"
    }
    else {
      console.log(`else`);
      maincontent.style.display = "none"
      mapcontent.style.display = "block"
    
    }
  }


  gotoProfile(){
    this.navCtrl.push(ProfilePage)
  }
 

  ngOnInit() {
    // this.initMap();


  }
  // initMap() {
  //   setTimeout(() => {
  //     this.hubs.getLocation(this.lat, this.long).then((data: any) => {
  //       this.userLocation = data;
  //       console.log(this.userLocation)
  //     })
  //   }, 1000);
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'bubbles',
  //     content: 'Please wait...',
  //     duration: 15000
  //   });
  //   const options = {
  //     center: { lat: this.lat, lng: this.long },
  //     zoom: 10,
  //     disableDefaultUI: true,
  //     icon: this.icon,
  //     styles: this.mapStyles
  //   }
  //   var map = new google.maps.Map(this.mapRef.nativeElement, options);
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  //   var marker = new google.maps.Marker({
  //     map: this.map,
  //     zoom: 10,
  //     icon: this.locIcon,
  //     title: 'Your Location',
  //     position: this.map.getCenter(),
  //     styles: this.mapStyles
  //   });
  //   setTimeout(() => {
  //     this.markers();
  //   }, 16000)
  //   setTimeout(() => {
  //     var contentString = '<div id="content">' +
  //       '</div>' +
  //       this.userLocation
  //     '</div>';

  //     var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //     });

  //     marker.addListener('click', function () {
  //       infowindow.open(map, marker);
  //       map.setZoom(13);
  //       map.setCenter(marker.getPosition());
  //     });
  //   }, 4000);


  // }
  // markers() {
  //   console.log(this.getOrgArry);
  //   for (let index = 0; index < this.getOrgArry.length; index++) {
  //     var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
  //     let showMultipleMarker = new google.maps.Marker({
  //       map: this.map,
  //       icon: this.icon,
  //       title: this.getOrgArry[index].orgName,
  //       size: { width: 5, height: 5 },
  //       position: { lat: parseFloat(this.getOrgArry[index].lat), lng: parseFloat(this.getOrgArry[index].long) },
  //       label: name,
  //       zoom: 15,
  //       styles: this.mapStyles

  //     });
  //     let infowindow = new google.maps.InfoWindow({
  //       content:
  //         '<div style="width: 400px; transition: 300ms;"><b>' +
  //         this.getOrgArry[index].category +
  //         '</b><div style="display: flex; padding-top: 10px;">' +
  //         '<img style="height: 100px; width: 100px; object-fit: cober; border-radius: 50px;" src=' +
  //         this.getOrgArry[index].downloadurlLogo +
  //         ">" +
  //         '<div style="padding-left: 10px;padding-right: 10px">' +
  //         this.getOrgArry[index].background +
  //         "</div><br>" +
  //         "</div>"
  //     });
  //     showMultipleMarker.addListener('click', () => {
  //       this.map.setZoom(14);
  //       this.map.setCenter(showMultipleMarker.getPosition());
  //       infowindow.open(showMultipleMarker.get(this.map), showMultipleMarker);


  //     });

  //   }
  // }


  mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#0064AC"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

}