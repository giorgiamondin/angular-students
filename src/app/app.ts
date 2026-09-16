import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  imports: [Student],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  author = 'Oscar';
}
