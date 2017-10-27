package com.meylot.domain.skill.types;

public enum Skill {

    AKROBATYKA(2),
    ALCHEMIA(2),
    BLOKOWANIE_WYJSCIA(6),
    BRONIE_DRZEWCOWE(3),
    KIESZONKOWSTWO(2),
    LOWIECTWO(1),
    MACZUGI(1),
    MIECZE(6),
    MLOTY(3),
    OCENA_OBIEKTU(1),
    OCENA_PRZECIWNIKA(1),
    OPIEKA_NAD_ZWIERZETAMI(1),
    OTWIERANIE_ZAMKOW(2),
    PAROWANIE(3),
    PLYWANIE(1),
    ROZKAZY(6),
    SKRADANIE_SIE(2),
    SPOSTRZEGAWCZOSC(1),
    SZACOWANIE(1),
    SZTYLETY(0),
    TARCZOWNICTWO(3),
    TARGOWANIE_SIE(1),
    TOPORY(2),
    TROPIENIE(1),
    UKRYWANIE_SIE(2),
    UNIKI(3),
    WALKA_BEZ_BRONI(4),
    WALKA_DWIEMA_BRONMI(6),
    WALKA_W_CIEMNOSCI(5),
    WALKA_W_SZYKU(6),
    WSPINACZKA(1),
    WYCZUCIE_KIERUNKU(1),
    WYKRYWANIE_PULAPEK(2),
    ZASLANIANIE(6),
    ZIELARSTWO(2),
    ZNAJOMOSC_JEZYKOW(1),
    SPEC_1(6);// straznik, part, noz, miecz, mysliwy, legion, glad

    private int formula;

    Skill(int formula) {
        this.formula = formula;
    }

    public int getFormula() {
        return formula;
    }
}
