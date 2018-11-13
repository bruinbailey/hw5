import { Component } from '@angular/core';
import { ActiveCourseService } from './models/active-course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private activeCourseService: ActiveCourseService) { }
  model: string;

  onChange() {
	  this.setActive(this.model || 'P422');
  }

  setActive(course: string) {
	  this.activeCourseService.setCourse(course);
  }
}
