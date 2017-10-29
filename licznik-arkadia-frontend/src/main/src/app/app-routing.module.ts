import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CharStatsCalcComponent} from "./char-stats-calc.component";
import {SkillCostComponent} from "./skill-cost.component";

const routes: Routes = [
  { path: '', redirectTo: '/char-stats', pathMatch: 'full' },
  { path: 'char-stats',  component: CharStatsCalcComponent },
  { path: 'skill-cost',  component: SkillCostComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
