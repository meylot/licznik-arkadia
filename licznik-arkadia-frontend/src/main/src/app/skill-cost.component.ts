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
  selectedSkill: Skill;
  allSkills = SKILL_ALL;
  fromLevel = 0;
  toLevel = 30;
  rangeCost = new Money(0);
  costInput: string;
  costReal = new Money(0);
  levelReal: number;

  constructor(private skillCostService: SkillCostService) {
  }

  calculateRangeCost(): void {
    if (this.selectedSkill) {
      const fromLevel = Math.max(0, this.fromLevel);
      const toLevel = Math.min(100, this.toLevel);
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
}
