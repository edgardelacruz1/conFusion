import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader.ts';
import { LEADERS } from '../shared/leaders.ts';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
	  return LEADERS;
  }
}
