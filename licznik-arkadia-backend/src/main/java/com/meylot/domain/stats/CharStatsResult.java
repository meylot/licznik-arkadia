package com.meylot.domain.stats;

import com.meylot.domain.stats.types.ExpLevel;

public class CharStatsResult {

    private int totalSubstats;
    private int combatSubstats;
    private int mentalSubstats;
    private int nextThreshold;
    private ExpLevel currentLevel;
    private ExpLevel nextLevel;

    public CharStatsResult() {
    }

    public int getTotalSubstats() {
        return totalSubstats;
    }

    public void setTotalSubstats(int totalSubstats) {
        this.totalSubstats = totalSubstats;
    }

    public int getCombatSubstats() {
        return combatSubstats;
    }

    public void setCombatSubstats(int combatSubstats) {
        this.combatSubstats = combatSubstats;
    }

    public int getMentalSubstats() {
        return mentalSubstats;
    }

    public void setMentalSubstats(int mentalSubstats) {
        this.mentalSubstats = mentalSubstats;
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
