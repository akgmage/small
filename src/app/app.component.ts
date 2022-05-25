import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  posts = [
    { 
      title: 'Neat Tree', 
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy Mountain', 
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of snowy mountain'
    },
    { 
      title: 'Mountain Biking', 
      imageUrl: 'assets/biking.jpeg',
      username: 'biker',
      content: 'I did some biking today'
    }
  ];
}
