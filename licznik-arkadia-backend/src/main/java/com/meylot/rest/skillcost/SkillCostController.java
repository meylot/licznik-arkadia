package com.meylot.rest.skillcost;

import com.meylot.domain.skill.SkillCostFormula;
import com.meylot.domain.skill.types.Skill;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/skill-cost")
public class SkillCostController {

    private Logger logger = Logger.getLogger("test");

    @GetMapping(value = "/cost", produces = "application/json")
    public int calculate(@RequestParam("skill") Skill skill, @RequestParam("from") int from, @RequestParam("to") int to) {
        logger.info("Skill cost - cost");
        SkillCostFormula formula = SkillCostFormula.getInstance(skill);
        return formula.calculateCost(from, to);
    }

    @GetMapping(value = "/level",produces = "application/json")
    public SkillCostAndLevelResource calculate(@RequestParam("skill") Skill skill, @RequestParam("cost") int cost) {
        logger.info("Skill cost - level");
        SkillCostFormula formula = SkillCostFormula.getInstance(skill);
        int level = formula.calculateLevel(cost);
        int realCost = formula.calculateCost(level);
        return new SkillCostAndLevelResource(level+1, realCost);
    }
}
