import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TroySharedModule } from 'app/shared/shared.module';
import { TroyCoreModule } from 'app/core/core.module';
import { TroyAppRoutingModule } from './app-routing.module';
import { TroyHomeModule } from './home/home.module';
import { TroyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TroySharedModule,
    TroyCoreModule,
    TroyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TroyEntityModule,
    TroyAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TroyAppModule {}
