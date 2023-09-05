import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Profile {
  name: string;
  address: string;
  imageUrl: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[] = [
    {
      name: 'Krithi setty',
      address: '123 Main St',
      imageUrl: 'assets/images/image1.jpg',
    },
    {
      name: 'Sravani',
      address: '456 Elm St, Doctor, chennai, Tamilnadu',
      imageUrl: 'assets/images/2nd.jpg',
    },
    {
      name: 'Rasmika',
      address: '123 razzak St, Delhi',
      imageUrl: 'assets/images/download1.jpeg',
    },
    {
      name: 'Nayana tara',
      address: '123 Shantha street, Mumbai',
      imageUrl: 'assets/images/download.jpeg',
    }
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToProfile() {
    this.router.navigate(['/view-profile']);
  }
}
