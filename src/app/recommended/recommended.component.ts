import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
@Input() profile: any;
  constructor() { }

  ngOnInit(): void {
  }
}
