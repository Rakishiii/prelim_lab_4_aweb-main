// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee',
//   standalone: true,
//   imports: [],
//   templateUrl: './employee.component.html',
//   styleUrl: './employee.component.css'
// })
// export class EmployeeComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = [
    {
      number: 1,
      fullName: 'Rakishi Dungca',
      gender: 'Male',
      email: 'rakishiduelle@gmail.com',
      employmentStatus: 'Full-time',
      salary: 50000
    },
    {
      number: 2,
      fullName: 'Kumi Briones',
      gender: 'Female',
      email: 'KumiBriones@gmail.com',
      employmentStatus: 'Part-time',
      salary: 30000
    },
    {
      number: 3,
      fullName: 'John Benedict Reyes',
      gender: 'Male',
      email: 'johnbenedict@gmail.com',
      employmentStatus: 'Contract',
      salary: 40000
    },
    {
    number: 4,
    fullName: 'Kurt Christian Sanchez',
    gender: 'Male',
    email: 'kurtchristiansancezt@gmail.com',
    employmentStatus: 'Contract',
    salary: 45000
    },
    {
    number: 5,
    fullName: 'Jasper Gutierrez',
    gender: 'Male',
    email: 'jaspergutierrez1@gmail.com',
    employmentStatus: 'Contract',
    salary: 80000
    }
  ];
  

  showEmployees: boolean = true;
}
