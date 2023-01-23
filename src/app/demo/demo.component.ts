import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // Example 2.#1
  sayHello() {
    console.log('Hello from demo component class!');
  }
}
