import {Injectable} from '@angular/core';
import {CharStats} from './char-stats';
import 'rxjs/add/operator/toPromise';
import {CharStatsResult} from './char-stats-result';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {COURAGE_ALL, DEXTERITY_ALL, INTELLECT_ALL, LACK_ALL, STAMINA_ALL, STRENGTH_ALL} from './stat';

@Injectable()
export class CharStatsService {
  private charStatsUrl = 'api/char-stats';  // URL to web api

  constructor(private http: HttpClient) {
  }

  calculate(charStats: CharStats): Observable<CharStatsResult> {
    const requestBody = {
      strength: charStats.strength.code,
      strengthLack: charStats.strengthLack.code,
      dexterity: charStats.dexterity.code,
      dexterityLack: charStats.dexterityLack.code,
      stamina: charStats.stamina.code,
      staminaLack: charStats.staminaLack.code,
      intellect: charStats.intellect.code,
      intellectLack: charStats.intellectLack.code,
      courage: charStats.courage.code,
      courageLack: charStats.courageLack.code
    };
    return this.http.post<CharStatsResult>(this.charStatsUrl, requestBody);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  parseCharStats(textInput: string): CharStats {
    const myRegexp = /Jestes (.+)[aiy], (.+)[aiy], (.+)[aiy], (.+)[aiy] i (.+)[aiy]\./g;
    const match = myRegexp.exec(textInput);
    const result = new CharStats();
    if (match) {
      result.strength = STRENGTH_ALL[STRENGTH_PATTERNS.indexOf(match[1])];
      result.dexterity = DEXTERITY_ALL[DEXTERITY_PATTERNS.indexOf(match[2])];
      result.stamina = STAMINA_ALL[STAMINA_PATTERNS.indexOf(match[3])];
      result.intellect = INTELLECT_ALL[INTELLECT_PATTERNS.indexOf(match[4])];
      result.courage = COURAGE_ALL[COURAGE_PATTERNS.indexOf(match[5])];
    }

    textInput.replace(
      /Wydaje ci sie, ze (.+) ci brakuje, zebys .* (sile|zrecznosc|wytrzymalosc|intelekt|odwage)\./g,
      function (a, b, c) {
        const lack = LACK_PATTERNS.indexOf(b);
        switch (c) {
          case 'sile':
            result.strengthLack = LACK_ALL[lack];
            break;
          case 'zrecznosc':
            result.dexterityLack = LACK_ALL[lack];
            break;
          case 'wytrzymalosc':
            result.staminaLack = LACK_ALL[lack];
            break;
          case 'intelekt':
            result.intellectLack = LACK_ALL[lack];
            break;
          case 'odwage':
            result.courageLack = LACK_ALL[lack];
            break;
        }
        return '';
      });
    textInput.replace(
      /Masz epick[ai] (sile|zrecznosc|wytrzymalosc|intelekt|odwage)\./g,
      function (a, b) {
        switch (b) {
          case 'sile':
            result.strength = STRENGTH_ALL[8];
            result.strengthLack = LACK_ALL[0];
            break;
          case 'zrecznosc':
            result.dexterity = DEXTERITY_ALL[8];
            result.dexterityLack = LACK_ALL[0];
            break;
          case 'wytrzymalosc':
            result.stamina = STAMINA_ALL[8];
            result.staminaLack = LACK_ALL[0];
            break;
          case 'intelekt':
            result.intellect = INTELLECT_ALL[8];
            result.intellectLack = LACK_ALL[0];
            break;
          case 'odwage':
            result.courage = COURAGE_ALL[8];
            result.courageLack = LACK_ALL[0];
            break;
        }
        return '';
      });

    textInput.replace(
      /Twoja? (sila|zrecznosc|wytrzymalosc|intelekt|odwaga) osiag.+ nadludzki poziom\./g,
      function (a, b, c) {
        switch (b) {
          case 'sila':
            result.strength = STRENGTH_ALL[9];
            result.strengthLack = LACK_ALL[0];
            break;
          case 'zrecznosc':
            result.dexterity = DEXTERITY_ALL[9];
            result.dexterityLack = LACK_ALL[0];
            break;
          case 'wytrzymalosc':
            result.stamina = STAMINA_ALL[9];
            result.staminaLack = LACK_ALL[0];
            break;
          case 'intelekt':
            result.intellect = INTELLECT_ALL[9];
            result.intellectLack = LACK_ALL[0];
            break;
          case 'odwaga':
            result.courage = COURAGE_ALL[9];
            result.courageLack = LACK_ALL[0];
            break;
        }
        return '';
      });
    return result;
  }
}

const STRENGTH_PATTERNS = ['slabiutk', 'watl', 'slab', 'krzepk', 'siln', 'mocn', 'potezn', 'mocarn'];
const DEXTERITY_PATTERNS = ['nieskoordynowan', 'niezreczn', 'niezgrabn', 'sprawn', 'zwinn', 'zreczn', 'gibk', 'akrobatyczn'];
const STAMINA_PATTERNS = ['cherlaw', 'rachityczn', 'mizern', 'dobrze zbudowan', 'wytrzymal', 'tward', 'muskularn', 'atletyczn'];
const INTELLECT_PATTERNS = ['bezmysln', 'tep', 'ograniczon', 'pojetn', 'inteligentn', 'bystr', 'blyskotliw', 'genialn'];
const COURAGE_PATTERNS = ['tchorzliw', 'strachliw', 'niepewn', 'zdecydowan', 'odwazn', 'dzieln', 'nieugiet', 'nieustraszon'];
const LACK_PATTERNS = ['bardzo duzo', 'duzo', 'troche', 'niewiele', 'bardzo niewiele'];
