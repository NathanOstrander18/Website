import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    title="Experience"
    experiences: { company: string, title: string, date: string, tasks: string[] }[]= [
        {
            company:"Evans & Chambers Technology, LLC",
            title:"Software Development Intern",
            date:"2017-2018",
            tasks:[
                "Developed and maintained web based applications using the Grails Framework and AngularJS",
                "Actively engaged in Agile development through participation in weekly sprints involving the completion of stories, modifications, and bugs",
                "Created AWS Lambda functions in JavaScript to send SNS alerts for tomcat errors and EC2 instance CPU utilization to Slack, expediting the production debugging process",
                "Implemented two factor authentication for a production web application using Spring Security, AWS SNS, and AWS SES",
                "Actively designed demo requirements and specifications for proposed work",
                "Worked directly with the client ensuring their product vision was met by our design",
                "Experience with Jenkins for development and build management"
            ]
        },
        {
            company:"Eutality Group, LLC",
            title:"Software Developer",
            date:"2016",
            tasks:[
                "Used windows Forms in C# to develop a level editing tool for a PC game",
                "Developed enemies and special weapon types in C++ for an Android game"
            ]
        },
        {
            company:"Next Phase Solutions and Services, Inc.",
            title:"App Development Intern",
            date:"2016",
            tasks:[
                "Worked with Java and Android SDK to develop a user management application for Android's Lollipop and Marshmallow operating systems"
            ]
        }
    ]
}
