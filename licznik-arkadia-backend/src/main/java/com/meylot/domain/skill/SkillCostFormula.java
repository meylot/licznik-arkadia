package com.meylot.domain.skill;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.meylot.domain.skill.types.Skill;

public class SkillCostFormula {

    private static final List<SkillCostFormula> instances;
    static {
        List<SkillCostFormula> instanceList = new ArrayList<>();
        instanceList.add(new SkillCostFormula(1.38, 0.5));
        instanceList.add(new SkillCostFormula(1.5, 0));
        instanceList.add(new SkillCostFormula(2.1, 0.4));
        instanceList.add(new SkillCostFormula(2.4, 0.6));
        instanceList.add(new SkillCostFormula(2.7, 0.8));
        instanceList.add(new SkillCostFormula(2.85, 0.9));
        instanceList.add(new SkillCostFormula(3, 1));
        instances = Collections.unmodifiableList(instanceList);
    }

    // a * (x+1) * x + b
    private double a;
    private double b;

    private SkillCostFormula(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public static SkillCostFormula getInstance(Skill skill) {
        return instances.get(skill.getFormula());
    }

    public int calculateCost(int atLevel) {
        return Math.max(1, (int) (a * (atLevel + 1) * atLevel + b));
    }

    public int calculateCost(int from, int to) {
        int sum = 0;
        for (int level = from; level < to; level++) {
            sum += calculateCost(level);
        }
        return sum;
    }

    public int calculateLevel(int cost) {
        double sqrta = Math.sqrt(a);
        int level = (int) Math.ceil((Math.sqrt(a - 4 * b + 4 * cost) - sqrta) / (2 * sqrta));
        int realCost = calculateCost(level - 1);
        if (realCost >= cost) {
            level--;
        }
        level = Math.max(0, Math.min(99, level));
        return level;
    }
}
