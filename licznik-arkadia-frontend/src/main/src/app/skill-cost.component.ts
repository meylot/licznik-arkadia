import {Component} from '@angular/core';
import {Skill, SKILL_ALL} from "./skill";
import {SkillCostService} from "./skill-cost.service";
import {Money} from "./money";

@Component({
  selector: 'skill-cost',
  templateUrl: './skill-cost.component.html',
  styleUrls: ['./skill-cost.component.css'],
  providers: [SkillCostService]
})
export class SkillCostComponent {
  selectedSkill = SKILL_ALL[36];
  allSkills = SKILL_ALL;
  levelRange = [0, 30];
  rangeCost = new Money(0);
  costInput = '1 mithrylowa, 2 srebrne i 7 miedzianych monet';
  costReal = new Money(0);
  levelReal: number;

  constructor(private skillCostService: SkillCostService) {
  }

  calculateRangeCost(): void {
    if (this.selectedSkill) {
      const fromLevel = Math.max(0, this.levelRange[0]);
      const toLevel = Math.min(100, this.levelRange[1]);
      this.skillCostService.calculateRangeCost(this.selectedSkill, fromLevel, toLevel).subscribe(data => {
        this.rangeCost = new Money(data);
      });
    }
  }

  calculateLevel() {
    const cost = new Money(this.costInput).toCopper();
    this.skillCostService.calculateLevel(this.selectedSkill, cost).subscribe(data => {
      this.costReal = new Money(data.realCost);
      this.levelReal = data.level;
    });
  }

  ngOnInit(): void {
    this.calculateRangeCost();
    this.calculateLevel();
  }
}
