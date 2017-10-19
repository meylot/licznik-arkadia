export class Stat {
  id: number;
  code: string;
  name: string;
}

export const STRENGTH_ALL: Stat[] = [
  {id: 1, code: 'SLABIUTKI', name: 'Słabiutki'},
  {id: 2, code: 'WATLY', name: 'Wątły'},
  {id: 3, code: 'SLABY', name: 'Słaby'},
  {id: 4, code: 'KRZEPKI', name: 'Krzepki'},
  {id: 5, code: 'SILNY', name: 'Silny'},
  {id: 6, code: 'MOCNY', name: 'Mocny'},
  {id: 7, code: 'POTEZNY', name: 'Potężny'},
  {id: 8, code: 'MOCARNY', name: 'Mocarny'},
  {id: 9, code: 'EPICKO_SILNY', name: 'Epicko silny'},
  {id: 10, code: 'NADLUDZKO_SILNY', name: 'Nadludzko silny'}
];

export const DEXTERITY_ALL: Stat[] = [
  {id: 1, code: 'NIESKOORDYNOWANY', name: 'Nieskoordynowany'},
  {id: 2, code: 'NIEZRECZNY', name: 'Niezreczny'},
  {id: 3, code: 'NIEZGRABNY', name: 'Niezgrabny'},
  {id: 4, code: 'SPRAWNY', name: 'Sprawny'},
  {id: 5, code: 'ZWINNY', name: 'Zwinny'},
  {id: 6, code: 'ZRECZNY', name: 'Zręczny'},
  {id: 7, code: 'GIBKI', name: 'Gibki'},
  {id: 8, code: 'AKROBATYCZNY', name: 'Akrobatyczny'},
  {id: 9, code: 'EPICKO_ZRECZNY', name: 'Epicko zręczny'},
  {id: 10, code: 'NADLUDZKO_ZRECZNY', name: 'Nadludzko zręczny'}
];

export const STAMINA_ALL: Stat[] = [
  {id: 1, code: 'CHERLAWY', name: 'Cherlawy'},
  {id: 2, code: 'RACHITYCZNY', name: 'Rachityczny'},
  {id: 3, code: 'MIZERNY', name: 'Mizerny'},
  {id: 4, code: 'DOBRZEZBUDOWANY', name: 'Dobrze zbudowany'},
  {id: 5, code: 'WYTRZYMALY', name: 'Wytrzymały'},
  {id: 6, code: 'TWARDY', name: 'Twardy'},
  {id: 7, code: 'MUSKULARNY', name: 'Muskularny'},
  {id: 8, code: 'ATLETYCZNY', name: 'Atletyczny'},
  {id: 9, code: 'EPICKO_WYTRZYMALY', name: 'Epicko wytrzymaly'},
  {id: 10, code: 'NADLUDZKO_WYTRZYMALY', name: 'Nadludzko wytrzymały'}
];

export const INTELLECT_ALL: Stat[] = [
  {id: 1, code: 'BEZMYSLNY', name: 'Bezmyślny'},
  {id: 2, code: 'TEPY', name: 'Tępy'},
  {id: 3, code: 'OGRANICZONY', name: 'Ograniczony'},
  {id: 4, code: 'POJETNY', name: 'Pojętny'},
  {id: 5, code: 'INTELIGENTNY', name: 'Inteligentny'},
  {id: 6, code: 'BYSTRY', name: 'Bystry'},
  {id: 7, code: 'BLYSKOTLIWY', name: 'Błyskotliwy'},
  {id: 8, code: 'GENIALNY', name: 'Genialny'},
  {id: 9, code: 'EPICKI_INTELEKT', name: 'Epicko inteligentny'},
  {id: 10, code: 'NADLUDZKO_INTELEKT', name: 'Nadludzko inteligentny'}
];

export const COURAGE_ALL: Stat[] = [
  {id: 1, code: 'TCHORZLIWY', name: 'Tchórzliwy'},
  {id: 2, code: 'STRACHLIWY', name: 'Strachliwy'},
  {id: 3, code: 'NIEPEWNY', name: 'Niepewny'},
  {id: 4, code: 'ZDECYDOWANY', name: 'Zdecydowany'},
  {id: 5, code: 'ODWAZNY', name: 'Odważny'},
  {id: 6, code: 'DZIELNY', name: 'Dzielny'},
  {id: 7, code: 'NIEUGIETY', name: 'Nieugięty'},
  {id: 8, code: 'NIEUSTRASZONY', name: 'Nieustraszony'},
  {id: 9, code: 'EPICKA_ODWAGA', name: 'Epicko odważny'},
  {id: 10, code: 'NADLUDZKA_ODWAGA', name: 'Nadludzko odważny'}
];

export const LACK_ALL: Stat[] = [
  {id: 1, code: 'BARDZO_DUZO', name: 'Bardzo dużo'},
  {id: 2, code: 'DUZO', name: 'Dużo'},
  {id: 3, code: 'TROCHE', name: 'Trochę'},
  {id: 4, code: 'NIEWIELE', name: 'Niewiele'},
  {id: 5, code: 'BARDZO_NIEWIELE', name: 'Bardzo niewiele'}
];
