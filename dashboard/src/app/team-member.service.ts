import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MEMBERS } from './team-members/mock-team-members';
import { TeamMember } from './team-member';


@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  constructor() { }

  getTeamMembers(): Observable<TeamMember[]>{
    const memebers =of(MEMBERS);
    return memebers;
  }
}
