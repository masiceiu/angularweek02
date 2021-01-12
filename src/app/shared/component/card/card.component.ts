import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Card = {
    title: 'HTML-CSS',
    count: 3,
    frequent: 'Week',
    body: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
