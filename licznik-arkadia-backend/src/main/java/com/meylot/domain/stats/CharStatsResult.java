package com.meylot.domain.stats;

import com.meylot.domain.stats.types.ExpLevel;

public class CharStatsResult {

    private int totalStrength;
    private int totalDexterity;
    private int totalStamina;
    private int totalIntellect;
    private int totalCourage;
    private int totalSubstats;
    private int nextThreshold;
    private ExpLevel currentLevel;
    private ExpLevel nextLevel;

    public CharStatsResult() {
    }

    public int getTotalStrength() {
        return totalStrength;
    }

    public void setTotalStrength(int totalStrength) {
        this.totalStrength = totalStrength;
    }

    public int getTotalDexterity() {
        return totalDexterity;
    }

    public void setTotalDexterity(int totalDexterity) {
        this.totalDexterity = totalDexterity;
    }

    public int getTotalStamina() {
        return totalStamina;
    }

    public void setTotalStamina(int totalStamina) {
        this.totalStamina = totalStamina;
    }

    public int getTotalIntellect() {
        return totalIntellect;
    }

    public void setTotalIntellect(int totalIntellect) {
        this.totalIntellect = totalIntellect;
    }

    public int getTotalCourage() {
        return totalCourage;
    }

    public void setTotalCourage(int totalCourage) {
        this.totalCourage = totalCourage;
    }

    public int getTotalSubstats() {
        return totalSubstats;
    }

    public void setTotalSubstats(int totalSubstats) {
        this.totalSubstats = totalSubstats;
    }

    public int getNextThreshold() {
        return nextThreshold;
    }

    public void setNextThreshold(int nextThreshold) {
        this.nextThreshold = nextThreshold;
    }

    public ExpLevel getCurrentLevel() {
        return currentLevel;
    }

    public void setCurrentLevel(ExpLevel currentLevel) {
        this.currentLevel = currentLevel;
    }

    public ExpLevel getNextLevel() {
        return nextLevel;
    }

    public void setNextLevel(ExpLevel nextLevel) {
        this.nextLevel = nextLevel;
    }
}
