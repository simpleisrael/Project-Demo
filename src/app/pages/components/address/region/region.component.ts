import {Component} from '@angular/core';

@Component({
  selector: 'ngx-region',
  templateUrl: './region.component.html',
})
export class RegionComponent {
  constructor() {
  }

  states = [
    {id: 1, name: 'Abia'},
    {id: 2, name: 'Adamawa'},
    {id: 3, name: 'Akwa Ibom'},
    {id: 4, name: 'Anambra'},
    {id: 5, name: 'Bauchi'},
    {id: 6, name: 'Bayelsa'},
    {id: 7, name: 'Benue'},
    {id: 8, name: 'Borno'},
    {id: 9, name: 'Cross River'},
    {id: 10, name: 'Delta'},
    {id: 11, name: 'Ebonyi'},
    {id: 12, name: 'Enugu'},
    {id: 13, name: 'Edo'},
    {id: 14, name: 'Ekiti'},
    {id: 15, name: 'Gombe'},
    {id: 16, name: 'Imo'},
    {id: 17, name: 'Jigawa'},
    {id: 18, name: 'Kaduna'},
    {id: 19, name: 'Kano'},
    {id: 20, name: 'Katsina'},
    {id: 21, name: 'Kebbi'},
    {id: 22, name: 'Kogi'},
    {id: 23, name: 'Kwara'},
    {id: 24, name: 'Lagos'},
    {id: 25, name: 'Nasarawa'},
    {id: 26, name: 'Niger'},
    {id: 27, name: 'Ogun'},
    {id: 28, name: 'Ondo'},
    {id: 29, name: 'Osun'},
    {id: 30, name: 'Oyo'},
    {id: 31, name: 'Plateau'},
    {id: 32, name: 'Rivers'},
    {id: 33, name: 'Sokoto'},
    {id: 34, name: 'Taraba'},
    {id: 35, name: 'Yobe'},
    {id: 36, name: 'Zamfara'},
  ];
  cities = [];
  lgas = [];

  selectedState = {};
  selectedCity = {};
  selectedLga = {};

  onSaveState(event) {
    console.log('Saving/Updating>>>', event);
  }

  onSaveCity(event) {
    console.log('Saving/Updating>>>', event);
  }

  onSaveLga(event) {
    console.log('Saving/Updating>>>', event);
  }

  loadState(state) {
    console.log('loading state');
    this.selectedState = state;
  }

  loadCity(city) {
    console.log('loading city');
    this.selectedCity = city;
  }

  loadLga(lga) {
    console.log('loading lga');
    this.selectedCity = lga;
  }
}
