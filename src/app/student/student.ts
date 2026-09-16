import { Component } from '@angular/core';


@Component({
    imports: [],
    selector: 'app-root',
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