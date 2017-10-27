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

    @GetMapping(produces = "application/json")
    public int calculate(@RequestParam("skill") Skill skill, @RequestParam("from") int from, @RequestParam("to") int to) {
        logger.info("Skill cost");
        SkillCostFormula formula = SkillCostFormula.getInstance(skill);
        return formula.calculateCost(from, to);
    }
}
