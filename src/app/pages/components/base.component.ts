import {Component} from '@angular/core';

@Component({
  selector: 'ngx-components',
  templateUrl: './base.component.html',
})
export class BaseComponent {

  states = [];
  cities = [];
  lgas = [];

  constructor() { }

}
