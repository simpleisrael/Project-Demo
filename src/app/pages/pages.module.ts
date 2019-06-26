import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {BaseComponent} from './components/base.component';
import {RegionComponent} from './components/address/region/region.component';
import {EditRegionComponent} from './components/address/edit-region/edit-region.component';
import {RegionThumbnailComponent} from './components/address/region-thumbnail/region-thumbnail.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  BaseComponent,
  RegionComponent,
  EditRegionComponent,
  RegionThumbnailComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
