import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  member: TeamMember = {
    id: 1,
    name: 'Oliver'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
