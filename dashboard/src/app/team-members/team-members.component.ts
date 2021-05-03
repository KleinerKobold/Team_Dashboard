import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';
import { MEMBERS } from './mock-team-members';
import { TeamMemberService} from '../team-member.service';
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  selectedMember?: TeamMember;
  
  constructor(private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.getTeamMembers();
  }

  onSelect(member: TeamMember): void {
    this.selectedMember = member;
  }
  getTeamMembers(): void {
    this.teamMemberService.getTeamMembers()
        .subscribe(members => this.teamMembers = members);
  }

}
