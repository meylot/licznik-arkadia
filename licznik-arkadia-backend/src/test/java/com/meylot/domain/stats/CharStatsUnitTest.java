package com.meylot.domain.stats;

import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.ArgumentMatchers.eq;

import com.meylot.domain.stats.types.Courage;
import com.meylot.domain.stats.types.Dexterity;
import com.meylot.domain.stats.types.ExpLevel;
import com.meylot.domain.stats.types.Intellect;
import com.meylot.domain.stats.types.Lack;
import com.meylot.domain.stats.types.Stamina;
import com.meylot.domain.stats.types.Strength;

import org.hamcrest.MatcherAssert;
import org.junit.Test;

public class CharStatsUnitTest {

    @Test
    public void shouldCalculateCharStats() throws Exception {
        // given
        CharStats charStats = CharStats.newBuilder()
                .withStrength(Strength.MOCARNY)
                .withStrengthLack(Lack.BARDZO_NIEWIELE)
                .withDexterity(Dexterity.AKROBATYCZNY)
                .withDexterityLack(Lack.NIEWIELE)
                .withStamina(Stamina.ATLETYCZNY)
                .withStaminaLack(Lack.DUZO)
                .withIntellect(Intellect.OGRANICZONY)
                .withIntellectLack(Lack.BARDZO_DUZO)
                .withCourage(Courage.NIEPEWNY)
                .withCourageLack(Lack.TROCHE)
                .build();
        // when
        CharStatsResult result = charStats.calculateCharStats();
        // then
        MatcherAssert.assertThat(result.getTotalSubstats(), is(135));
        MatcherAssert.assertThat(result.getCombatSubstats(), is(113));
        MatcherAssert.assertThat(result.getMentalSubstats(), is(22));
        MatcherAssert.assertThat(result.getNextThreshold(), not(is(eq((0)))));
        MatcherAssert.assertThat(result.getCurrentLevel(), is(notNullValue()));
        MatcherAssert.assertThat(result.getNextLevel(), is(notNullValue()));
        MatcherAssert.assertThat(result.getCurrentLevel(), is(not(result.getNextLevel())));
    }

    @Test
    public void shouldCalculateCharStatsTopLevel() throws Exception {
        // given
        CharStats charStats = CharStats.newBuilder()
                .withStrength(Strength.MOCARNY)
                .withStrengthLack(Lack.BARDZO_NIEWIELE)
                .withDexterity(Dexterity.EPICKO_ZRECZNY)
                .withDexterityLack(Lack.BARDZO_NIEWIELE)
                .withStamina(Stamina.NADLUDZKO_WYTRZYMALY)
                .withStaminaLack(Lack.DUZO)
                .withIntellect(Intellect.EPICKO_INTELIGENTNY)
                .withIntellectLack(Lack.BARDZO_NIEWIELE)
                .withCourage(Courage.NIEUSTRASZONY)
                .withCourageLack(Lack.BARDZO_NIEWIELE)
                .build();
        // when
        CharStatsResult result = charStats.calculateCharStats();
        // then
        MatcherAssert.assertThat(result.getTotalSubstats(), is(212));
        MatcherAssert.assertThat(result.getNextThreshold(), is(212));
        MatcherAssert.assertThat(result.getCurrentLevel(), is(ExpLevel.OSOBA_OWIANA_LEGENDA));
        MatcherAssert.assertThat(result.getNextLevel(), is(ExpLevel.OSOBA_OWIANA_LEGENDA));
    }

    @Test
    public void shouldCalculateCharStatsZero() throws Exception {
        // given
        CharStats charStats = CharStats.newBuilder()
                .withStrength(Strength.SLABIUTKI)
                .withStrengthLack(Lack.BARDZO_DUZO)
                .withDexterity(Dexterity.NIESKOORDYNOWANY)
                .withDexterityLack(Lack.BARDZO_DUZO)
                .withStamina(Stamina.CHERLAWY)
                .withStaminaLack(Lack.BARDZO_DUZO)
                .withIntellect(Intellect.BEZMYSLNY)
                .withIntellectLack(Lack.BARDZO_DUZO)
                .withCourage(Courage.TCHORZLIWY)
                .withCourageLack(Lack.BARDZO_DUZO)
                .build();
        // when
        CharStatsResult result = charStats.calculateCharStats();
        // then
        MatcherAssert.assertThat(result.getTotalSubstats(), is(0));
        MatcherAssert.assertThat(result.getNextThreshold(), is(notNullValue()));
        MatcherAssert.assertThat(result.getCurrentLevel(), is(ExpLevel.KTOS_NIEDOSWIADCZONY));
        MatcherAssert.assertThat(result.getNextLevel(), is(ExpLevel.KTOS_KTO_WIDZIAL_JUZ_TO_I_OWO));
    }



}