import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';

@Component({
  selector: 'app-team-member-detail',
  templateUrl: './team-member-detail.component.html',
  styleUrls: ['./team-member-detail.component.css']
})
export class TeamMemberDetailComponent implements OnInit {

  @Input() member?:TeamMember;

  constructor() { }

  ngOnInit(): void {
  }

}
