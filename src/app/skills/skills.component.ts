import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    title="Core Skills"
    skills=[
        'Java (Grails, Spring Boot)',
        'AWS (Production usage of EC2, CloudWatch, Lambda, SNS, RDS)',
        'HTML, CSS, JavaScript (Angular)',
        'SQL (mySQL)',
        'Python'
    ]
}
