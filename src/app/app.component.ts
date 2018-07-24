import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Full Stack Developer';
    name = 'Nathan Ostrander';
    education = 'BS, Computer Science\nUniversity of Maryland 2018'
    email = '14nostrander@gmail.com'
    phone = '610-639-4607'
    githubLink = 'https://github.com/NathanOstrander18'

}
