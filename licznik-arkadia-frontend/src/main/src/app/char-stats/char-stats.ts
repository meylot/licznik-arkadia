import {Stat} from './stat';

export class CharStats {
  strength: Stat;
  strengthLack: Stat;
  dexterity: Stat;
  dexterityLack: Stat;
  stamina: Stat;
  staminaLack: Stat;
  intellect: Stat;
  intellectLack: Stat;
  courage: Stat;
  courageLack: Stat;


  constructor() {
    this.strength = {id: 1, code: 'SLABIUTKI', name: 'Słabiutki'};
    this.strengthLack = {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'};
    this.dexterity = {id: 1, code: 'NIESKOORDYNOWANY', name: 'Nieskoordynowany'};
    this.dexterityLack = {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'};
    this.stamina = {id: 1, code: 'CHERLAWY', name: 'Cherlawy'};
    this.staminaLack = {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'};
    this.intellect = {id: 1, code: 'BEZMYSLNY', name: 'Bezmyslny'};
    this.intellectLack = {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'};
    this.courage = {id: 1, code: 'TCHORZLIWY', name: 'Tchórzliwy'};
    this.courageLack = {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'};
  }
}
