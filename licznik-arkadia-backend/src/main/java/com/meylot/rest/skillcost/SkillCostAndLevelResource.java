package com.meylot.rest.skillcost;

public class SkillCostAndLevelResource {

    private int level;
    private int realCost;

    public SkillCostAndLevelResource(int level, int realCost) {
        this.level = level;
        this.realCost = realCost;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getRealCost() {
        return realCost;
    }

    public void setRealCost(int realCost) {
        this.realCost = realCost;
    }
}
