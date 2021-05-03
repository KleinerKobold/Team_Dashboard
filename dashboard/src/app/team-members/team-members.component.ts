import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';
import { MEMBERS } from './mock-team-members'
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  TeamMember =MEMBERS;
  selectedMember?: TeamMember;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(member: TeamMember): void {
    this.selectedMember = member;
  }

}
