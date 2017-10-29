import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CharStatsCalcComponent} from './char-stats-calc.component';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {CookieService} from "ngx-cookie-service";
import {AppRoutingModule} from "./app-routing.module";
import {SkillCostComponent} from "./skill-cost.component";
import {NouisliderModule} from "ng2-nouislider";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    AppRoutingModule,
    NouisliderModule
  ],
  declarations: [
    AppComponent,
    CharStatsCalcComponent,
    SkillCostComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
