import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-region-thumbnail',
  templateUrl: './region-thumbnail.component.html',
})
export class RegionThumbnailComponent {
  @Input() entity = {};
  @Output() onLoad = new EventEmitter();

  loadEntity() {
    this.onLoad.emit(this.entity);
  }


}
