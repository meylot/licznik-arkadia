import {isNumeric} from "rxjs/util/isNumeric";

export class Money {
  copper: number;
  silver: number;
  gold: number;
  mithril: number;

  constructor(c: any, s?: number, g?: number, m?: number) {
    if (isNumeric(c)) {
      this.copper = Number(c);
      if (s || g || m) {
        this.silver = s;
        this.gold = g;
        this.mithril = m;
      } else {
        this.silver = 0;
        this.gold = 0;
        this.mithril = 0;
        this.denominate();
      }
    } else {
      const text = String(c);
      const moneyRegexp = /^(?:(\d+)\s*m[a-su-z]*t)?[^\d]*?(?:(\d+)\s*z)?[^\d]*?(?:(\d+)\s*s)?[^\d]*?(?:(\d+)\s*m)?[^\d]*$/g;
      const match = moneyRegexp.exec(text);
      let totalCopper = 0;
      if (!match) {
        return new Money(0);
      }
      if (match[1]) {
        totalCopper += Number(match[1]) * 24000;
      }
      if (match[2]) {
        totalCopper += Number(match[2]) * 240;
      }
      if (match[3]) {
        totalCopper += Number(match[3]) * 12;
      }
      if (match[4]) {
        totalCopper += Number(match[4]);
      }
      return new Money(totalCopper);
    }
  }


  denominate(): void {
    let totalCopper = this.toCopper();
    this.mithril = Math.floor(totalCopper / 24000);
    totalCopper %= 24000;
    this.gold = Math.floor(totalCopper / 240);
    totalCopper %= 240;
    this.silver = Math.floor(totalCopper / 12);
    totalCopper %= 12;
    this.copper = totalCopper;
  }

  toString(): string {
    let result = '';
    if (this.mithril) {
      result += this.mithril + 'mt ';
    }
    if (this.gold || result) {
      result += this.gold + 'zl ';
    }
    if (this.silver || result) {
      result += this.silver + 'sr ';
    }
    result += this.copper + 'md';
    return result;
  }

  toCopper(): number {
    return this.copper + 12 * this.silver + 240 * this.gold + 24000 * this.mithril;
  }
}
