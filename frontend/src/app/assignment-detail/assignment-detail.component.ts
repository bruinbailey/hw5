import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Submission } from '../models/Submission';
import { AssignmentDataService} from '../models/assignment-data.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 assignmentName: Observable<String>;
 sectionName: Observable<String>;
 sub: Submission;

  constructor(
  private route: ActivatedRoute,
  private assignmentData: AssignmentDataService,
  ) {this.sub = new Submission() }

  ngOnInit() {
	  this.assignmentName = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => of(params.get('name')))
	  );
	  this.sectionName = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => of(params.get('section')))
	  );
  }

  submit(): void {
    this.sectionName.subscribe(section => {
      this.assignmentName.subscribe(assnName => {
        this.sub.assignment.section = section;
        this.sub.assignment.name = assnName;
        this.assignmentData.submitAssignment(section, assnName, this.sub)
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
      })
    })
  }

}
