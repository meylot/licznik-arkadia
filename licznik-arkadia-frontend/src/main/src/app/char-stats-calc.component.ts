import {Component} from '@angular/core';
import {CharStats} from './char-stats';
import {CharStatsService} from './char-stats.service';
import {CharStatsResult} from './char-stats-result';
import {COURAGE_ALL, DEXTERITY_ALL, INTELLECT_ALL, LACK_ALL, STAMINA_ALL, STRENGTH_ALL} from './stat';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'char-stats-calc',
  templateUrl: './char-stats-calc.component.html',
  styleUrls: ['./char-stats-calc.component.css'],
  providers: [CharStatsService]
})
export class CharStatsCalcComponent {

  strengthLevels = STRENGTH_ALL;
  dexterityLevels = DEXTERITY_ALL;
  staminaLevels = STAMINA_ALL;
  intellectLevels = INTELLECT_ALL;
  courageLevels = COURAGE_ALL;
  lackLevels = LACK_ALL;

  charStats = new CharStats();
  charStatsResult: CharStatsResult;
  textInput: string;
  private cookieName = 'char-stats';

  getLevelDisplayName(level: string): string {
    switch (level) {
      case 'KTOS_NIEDOSWIADCZONY':
        return 'ktoś niedoświadczony';
      case 'KTOS_KTO_WIDZIAL_JUZ_TO_I_OWO':
        return 'ktoś, kto widział już to i owo';
      case 'KTOS_KTO_PEWNIE_STAPA_PO_SWIECIE':
        return 'ktoś, kto pewnie stąpa po świecie';
      case 'KTOS_KTO_NIEJEDNO_WIDZIAL':
        return 'ktoś, kto niejedno widział';
      case 'KTOS_KTO_SWOJE_PRZEZYL':
        return 'ktoś, kto swoje przeżył';
      case 'KTOS_DOSWIADCZONY':
        return 'ktoś doświadczony';
      case 'KTOS_KTO_WIELE_PRZESZEDL':
        return 'ktoś, kto wiele przeszedł';
      case 'KTOS_KTO_WIDZIAL_KAWAL_SWIATA':
        return 'ktoś, kto widział kawał świata';
      case 'KTOS_BARDZO_DOSWIADCZONY':
        return 'ktoś bardzo doświadczony';
      case 'KTOS_KTO_ZWIEDZIL_CALY_SWIAT':
        return 'ktoś, kto zwiedził cały świat';
      case 'KTOS_WIELCE_DOSWIADCZONY':
        return 'ktoś wielce doświadczony';
      case 'KTOS_KTO_WIDZIAL_I_DOSWIADCZYL_WSZYSTKIEGO':
        return 'ktoś, kto widział i doświadczył wszystkiego';
      case 'OSOBA_OWIANA_LEGENDA':
        return 'osoba owiana legendą';
      default:
        return '-';
    }
  }

  constructor(private charStatsService: CharStatsService, private cookieService: CookieService) {
  }

  calculate(): void {
    this.charStatsService.calculate(this.charStats).subscribe(data => {
      this.charStatsResult = data;
    });
    this.cookieService.set(this.cookieName, JSON.stringify(this.charStats));
  }

  readTextInput() {
    this.charStats = this.charStatsService.parseCharStats(this.textInput);
    this.calculate();
  }

  ngOnInit(): void {
    if (this.cookieService.check(this.cookieName)) {
      const cookieValue = this.cookieService.get(this.cookieName);
      this.charStats = JSON.parse(cookieValue);
    }
  }
}
