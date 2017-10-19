import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CharStatsCalcComponent} from './char-stats-calc.component';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    CharStatsCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
