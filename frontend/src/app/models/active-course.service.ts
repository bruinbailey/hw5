import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveCourseService {
	private selectedCourse: string;
	public course = new EventEmitter<string>();

	setCourse(course: string) {
		this.selectedCourse = course;
		this.course.emit(this.selectedCourse);
	}

  constructor() { }
}
