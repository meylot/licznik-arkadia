package com.meylot.rest.charstats;

import javax.validation.constraints.NotNull;

import com.meylot.domain.stats.types.Courage;
import com.meylot.domain.stats.types.Dexterity;
import com.meylot.domain.stats.types.Intellect;
import com.meylot.domain.stats.types.Lack;
import com.meylot.domain.stats.types.Stamina;
import com.meylot.domain.stats.types.Strength;

public class CharStatsResource {

    @NotNull
    private Strength strength;
    @NotNull
    private Lack strengthLack;
    @NotNull
    private Dexterity dexterity;
    @NotNull
    private Lack dexterityLack;
    @NotNull
    private Stamina stamina;
    @NotNull
    private Lack staminaLack;
    @NotNull
    private Intellect intellect;
    @NotNull
    private Lack intellectLack;
    @NotNull
    private Courage courage;
    @NotNull
    private Lack courageLack;

    public CharStatsResource() {

    }

    public Strength getStrength() {
        return strength;
    }

    public void setStrength(Strength strength) {
        this.strength = strength;
    }

    public Lack getStrengthLack() {
        return strengthLack;
    }

    public void setStrengthLack(Lack strengthLack) {
        this.strengthLack = strengthLack;
    }

    public Dexterity getDexterity() {
        return dexterity;
    }

    public void setDexterity(Dexterity dexterity) {
        this.dexterity = dexterity;
    }

    public Lack getDexterityLack() {
        return dexterityLack;
    }

    public void setDexterityLack(Lack dexterityLack) {
        this.dexterityLack = dexterityLack;
    }

    public Stamina getStamina() {
        return stamina;
    }

    public void setStamina(Stamina stamina) {
        this.stamina = stamina;
    }

    public Lack getStaminaLack() {
        return staminaLack;
    }

    public void setStaminaLack(Lack staminaLack) {
        this.staminaLack = staminaLack;
    }

    public Intellect getIntellect() {
        return intellect;
    }

    public void setIntellect(Intellect intellect) {
        this.intellect = intellect;
    }

    public Lack getIntellectLack() {
        return intellectLack;
    }

    public void setIntellectLack(Lack intellectLack) {
        this.intellectLack = intellectLack;
    }

    public Courage getCourage() {
        return courage;
    }

    public void setCourage(Courage courage) {
        this.courage = courage;
    }

    public Lack getCourageLack() {
        return courageLack;
    }

    public void setCourageLack(Lack courageLack) {
        this.courageLack = courageLack;
    }
}
