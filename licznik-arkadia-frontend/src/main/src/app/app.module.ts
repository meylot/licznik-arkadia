import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CharStatsCalcComponent} from './char-stats/char-stats-calc.component';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {CookieService} from "ngx-cookie-service";
import {AppRoutingModule} from "./app-routing.module";
import {SkillCostComponent} from "./skill-cost/skill-cost.component";
import {NouisliderModule} from "ng2-nouislider";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AsciiEditorComponent} from "./ascii-editor/ascii-editor.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    AppRoutingModule,
    NouisliderModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CharStatsCalcComponent,
    SkillCostComponent,
    AsciiEditorComponent
  ],
  providers: [CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
