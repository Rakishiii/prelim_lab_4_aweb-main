import { Component } from '@angular/core';

@Component({
  selector: 'app-post',  // Selector used to embed the component in other templates (if necessary)
  templateUrl: './post.component.html',  // Path to the template file (HTML)
  styleUrls: ['./post.component.css']  // Path to the CSS file for styling the component
})
export class PostComponent {
  // Define properties for the content of the About page
  title: string = 'Introduction to our page';  // Title for the page
  description: string = 'We are a technology company that creates innovative products that improve people\'s lives.';
  mission: string = 'Our mission is to revolutionize the tech industry with cutting-edge solutions.';
  vision: string = 'To lead the world in technological innovation and create a smarter future.';
  values: string[] = [
    'Innovation', 
    'Customer Focus', 
    'Integrity', 
    'Excellence'
  ];  // Example list of company values

  // Optionally, you can add methods here if you need interactivity, but for now, it's static data
}
