package com.meylot.domain.stats;

import static com.meylot.domain.stats.types.ExpLevel.KTOS_BARDZO_DOSWIADCZONY;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_DOSWIADCZONY;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_NIEJEDNO_WIDZIAL;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_PEWNIE_STAPA_PO_SWIECIE;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_SWOJE_PRZEZYL;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_WIDZIAL_I_DOSWIADCZYL_WSZYSTKIEGO;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_WIDZIAL_JUZ_TO_I_OWO;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_WIDZIAL_KAWAL_SWIATA;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_WIELE_PRZESZEDL;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_KTO_ZWIEDZIL_CALY_SWIAT;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_NIEDOSWIADCZONY;
import static com.meylot.domain.stats.types.ExpLevel.KTOS_WIELCE_DOSWIADCZONY;
import static com.meylot.domain.stats.types.ExpLevel.NONE;
import static com.meylot.domain.stats.types.ExpLevel.OSOBA_OWIANA_LEGENDA;

import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;

import com.meylot.domain.stats.types.Courage;
import com.meylot.domain.stats.types.Dexterity;
import com.meylot.domain.stats.types.ExpLevel;
import com.meylot.domain.stats.types.Intellect;
import com.meylot.domain.stats.types.Lack;
import com.meylot.domain.stats.types.Stamina;
import com.meylot.domain.stats.types.Strength;

public class CharStats {

    private static NavigableMap<Integer, ExpLevel> levelMap;

    static {
        levelMap = new TreeMap<>();
        levelMap.put(0, KTOS_NIEDOSWIADCZONY);
        levelMap.put(58, KTOS_KTO_WIDZIAL_JUZ_TO_I_OWO);
        levelMap.put(70, KTOS_KTO_PEWNIE_STAPA_PO_SWIECIE);
        levelMap.put(82, KTOS_KTO_NIEJEDNO_WIDZIAL);
        levelMap.put(94, KTOS_KTO_SWOJE_PRZEZYL);
        levelMap.put(106, KTOS_DOSWIADCZONY);
        levelMap.put(118, KTOS_KTO_WIELE_PRZESZEDL);
        levelMap.put(130, KTOS_KTO_WIDZIAL_KAWAL_SWIATA);
        levelMap.put(142, KTOS_BARDZO_DOSWIADCZONY);
        levelMap.put(154, KTOS_KTO_ZWIEDZIL_CALY_SWIAT);
        levelMap.put(166, KTOS_WIELCE_DOSWIADCZONY);
        levelMap.put(178, KTOS_KTO_WIDZIAL_I_DOSWIADCZYL_WSZYSTKIEGO);
        levelMap.put(190, OSOBA_OWIANA_LEGENDA);
        levelMap.put(Integer.MAX_VALUE, NONE);
    }

    private Strength strength;
    private Lack strengthLack;
    private Dexterity dexterity;
    private Lack dexterityLack;
    private Stamina stamina;
    private Lack staminaLack;
    private Intellect intellect;
    private Lack intellectLack;
    private Courage courage;
    private Lack courageLack;

    private CharStats(Builder builder) {
        strength = builder.strength;
        strengthLack = builder.strengthLack;
        dexterity = builder.dexterity;
        dexterityLack = builder.dexterityLack;
        stamina = builder.stamina;
        staminaLack = builder.staminaLack;
        intellect = builder.intellect;
        intellectLack = builder.intellectLack;
        courage = builder.courage;
        courageLack = builder.courageLack;
    }

    public CharStatsResult calculateCharStats() {
        int totalStrength = strength.ordinal() * 5 + strengthLack.ordinal();
        int totalDexterity = dexterity.ordinal() * 5 + dexterityLack.ordinal();
        int totalStamina = stamina.ordinal() * 5 + staminaLack.ordinal();
        int totalIntellect = intellect.ordinal() * 5 + intellectLack.ordinal();
        int totalCourage = courage.ordinal() * 5 + courageLack.ordinal();
        int totalSubstats = totalStrength + totalDexterity + totalStamina + totalIntellect + totalCourage;
        Map.Entry<Integer, ExpLevel> lower = levelMap.floorEntry(totalSubstats);
        Map.Entry<Integer, ExpLevel> higher = levelMap.higherEntry(totalSubstats);

        CharStatsResult result = new CharStatsResult();
        result.setTotalStrength(totalStrength);
        result.setTotalDexterity(totalDexterity);
        result.setTotalStamina(totalStamina);
        result.setTotalIntellect(totalIntellect);
        result.setTotalCourage(totalCourage);
        result.setTotalSubstats(totalSubstats);
        result.setCurrentLevel(lower.getValue());
        if (higher.getValue() == NONE) {
            result.setNextLevel(result.getCurrentLevel());
            result.setNextThreshold(result.getTotalSubstats());
        } else {
            result.setNextLevel(higher.getValue());
            result.setNextThreshold(higher.getKey());
        }
        return result;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static final class Builder {

        private Strength strength;
        private Lack strengthLack;
        private Dexterity dexterity;
        private Lack dexterityLack;
        private Stamina stamina;
        private Lack staminaLack;
        private Intellect intellect;
        private Lack intellectLack;
        private Courage courage;
        private Lack courageLack;

        private Builder() {
        }

        public Builder withStrength(Strength strength) {
            this.strength = strength;
            return this;
        }

        public Builder withStrengthLack(Lack strengthLack) {
            this.strengthLack = strengthLack;
            return this;
        }

        public Builder withDexterity(Dexterity dexterity) {
            this.dexterity = dexterity;
            return this;
        }

        public Builder withDexterityLack(Lack dexterityLack) {
            this.dexterityLack = dexterityLack;
            return this;
        }

        public Builder withStamina(Stamina stamina) {
            this.stamina = stamina;
            return this;
        }

        public Builder withStaminaLack(Lack staminaLack) {
            this.staminaLack = staminaLack;
            return this;
        }

        public Builder withIntellect(Intellect intellect) {
            this.intellect = intellect;
            return this;
        }

        public Builder withIntellectLack(Lack intellectLack) {
            this.intellectLack = intellectLack;
            return this;
        }

        public Builder withCourage(Courage courage) {
            this.courage = courage;
            return this;
        }

        public Builder withCourageLack(Lack courageLack) {
            this.courageLack = courageLack;
            return this;
        }

        public CharStats build() {
            return new CharStats(this);
        }
    }
}