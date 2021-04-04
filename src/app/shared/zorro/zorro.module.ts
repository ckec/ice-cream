import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
];
const componentsModules = [NzLayoutModule, NzMenuModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, NzIconModule, componentsModules],
  exports: [NzIconModule, componentsModules],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class ZorroModule {}
