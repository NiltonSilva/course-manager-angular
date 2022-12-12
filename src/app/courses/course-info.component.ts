import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    templateUrl: 'course-info.component.html',
    styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))) ;
    }

    save(): void  {
        this.courseService.save(this.course);
    }

}
