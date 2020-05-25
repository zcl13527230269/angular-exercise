import { Component, OnInit } from '@angular/core';

const todos = [
  {
    id: 1,
    title: 'lily',
    done: true
  },
  {
    id: 2,
    title: 'mary',
    done: true
  },
  {
    id: 3,
    title: 'lucy',
    done: true
  }
];

@Component({
  selector: 'app-learn01',
  templateUrl: './learn01.component.html',
  styleUrls: ['./learn01.component.css']
})

export class Learn01Component implements OnInit {
  todus: {
    id: number,
    title: string,
    done: boolean,
  }[] = todos;

  constructor() { }

  ngOnInit(): void {

  }

}
