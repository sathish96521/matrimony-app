import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  @Input() profile: any;
  constructor() { }

  ngOnInit(): void {
  }
  closeModal() {
    console.log("sathish");
    
  }
}
