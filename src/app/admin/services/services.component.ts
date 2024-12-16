import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // List of iPhone models with image paths
  iphones = [
    { name: 'iPhone 16 Pro', image: 'assets/images/iphone16pro.jpeg' },
    { name: 'iPhone 15 Pro', image: 'assets/images/iphone15pro.jpeg' },
    { name: 'iPhone 15', image: 'assets/images/iphone15.jpeg' },
    { name: 'iPhone 14 Pro Max', image: 'assets/images/iphone14promax.jpeg' },
    { name: 'iPhone 14', image: 'assets/images/iphone14.jpeg' },
    { name: 'iPhone SE', image: 'assets/images/iphonese.jpeg' }
  ];
}
