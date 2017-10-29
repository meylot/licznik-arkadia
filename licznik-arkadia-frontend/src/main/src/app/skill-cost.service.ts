import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Skill} from "./skill";

@Injectable()
export class SkillCostService {
  private skillCostUrl = 'api/skill-cost/cost';
  private skillLevelUrl = 'api/skill-cost/level';

  constructor(private http: HttpClient) {
  }

  calculateRangeCost(skill: Skill, fromLevel: number, toLevel: number): Observable<number> {
    let params = new HttpParams();
    params = params.append("skill", skill.code);
    params = params.append("from", String(fromLevel));
    params = params.append("to", String(toLevel));
    return this.http.get<number>(this.skillCostUrl, {params: params});
  }

  calculateLevel(skill: Skill, cost: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("skill", skill.code);
    params = params.append("cost", String(cost));
    return this.http.get<number>(this.skillLevelUrl, {params: params});
  }


}
