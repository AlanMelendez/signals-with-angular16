import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';

@NgModule({
  declarations: [
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SignalsLayoutComponent
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}