import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    imports: [CommonModule],
    selector: 'app-student',
    templateUrl: './student.html',
    styleUrl: './student.css'
})
export class Student {
    students: any[] = [{ name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: true },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: true },
    { name: "Minnie", city: "Topolinia", gender: "F", present: true }];

}