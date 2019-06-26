import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-edit-region',
  templateUrl: './edit-region.component.html',
})
export class EditRegionComponent {
  @Output() onSave = new EventEmitter();
  @Input() entity = {};

  constructor() {}

  save() {
    this.onSave.emit(this.entity);
    this.entity = {};
  }

  reset() {
    this.entity = {};
  }
}
