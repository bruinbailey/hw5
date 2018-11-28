import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Assignment } from '../models/Assignments';
import { AssignmentDataService } from '../models/assignment-data.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  section: Observable<String>;
  sectionAssignments: Observable<Assignment[]>;

  constructor(
  private route: ActivatedRoute,
  private assignmentDataService: AssignmentDataService
  ) { }

  ngOnInit() {
    this.sectionAssignments = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.assignmentDataService.getAssignments(params.get('section')))
      );

	  // This code gets the :section parameter out of the route
	  this.section = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => of(params.get('section')))
	  );
  }

}
