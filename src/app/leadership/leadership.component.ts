import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class LeadershipComponent {
    title="Leadership"
    leadershipExperience: { organization: string, title: string, tasks: string[] }[]= [
        {
            organization: 'Delta Upsilon International Fraternity',
            title: 'Chapter President',
            tasks: [
                'Successfully applied for and obtained Chapter status during term',
                'Increased membership by 33%',
                'Oversaw all officers; ensured accountability and responsibility in all members',
                'Coordinated goal setting process / ensured all goals are actively pursued and achieved',
                'Liaison between international organization and local organization',
                'Lead executive council and chapter meetings',
                'Served as colony spokesperson'
            ]
        }
    ]

    state = 'hide'

    constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])

    checkScroll() {
        const componentPosition = this.el.nativeElement.offsetTop
        const scrollPosition = window.pageYOffset

        if (scrollPosition >= componentPosition - 600) {
            this.state = 'show'
        } else {
            this.state = 'hide'
        }
    }
}
