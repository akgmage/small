import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';
  constructor() { }

  ngOnInit(): void {
  }

}

/* 
  Setting up Input Binding
  1) In the parent component template, find where we create the child component
  2) Decide on the property name that we want to use to communicate from the parent to the child
  3) Add a new binding to the child component, specifying the data we want to pass down
  4) In the child component's class file, add an input property. This tells the component
  to expect the parent to provide the value for this property
  5) In the child component's template file, reference that input property
*/