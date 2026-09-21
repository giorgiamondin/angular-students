import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    imports: [CommonModule],
    selector: 'app-student',
    templateUrl: './student.html',
    styleUrl: './student.css'
})
export class Student {

    M_COLOR = "lightBlue";
    F_COLOR = "pink";

    students: any[] = [{ name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: false },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: true },
    { name: "Minnie", city: "Topolinia", gender: "F", present: true }];

    getStyle(s:any) {
        return {
            'backgroundColor': s.gender == 'F' ? this.F_COLOR : this.M_COLOR,
            'textDecoration' : s.present ? 'none' :'underline',
            'font-weight' : s.present ? 'none' : 'bold'
        };
    };

};
