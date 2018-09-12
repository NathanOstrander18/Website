import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  'app.component.ts'
  @ViewChild('snav') public snav;
  constructor() { }

  ngOnInit() {
  }

}
