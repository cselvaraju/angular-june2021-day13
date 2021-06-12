import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  cost: number = 12.45;
  message: string = 'Hello World';
  today: Date = new Date();
  text: string = '';
  numCharsToTruncate: number = 0;
  person = {
    name: 'John Doe',
    age: 35
  };

  constructor() { }

  ngOnInit(): void {
  }

  upperCase(str: string): string {
    return str.toUpperCase();
  }

}
