import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeedetails=[{
    name:"candgg",
    age:23,
    qualification:"BE",
    specification:"computer Engineering"
  },
  {
    name:"fvjn",
    age:28,
    qualification:"BE",
    specification:"eletctical Engineering"
  },
  {
    name:"dscfvgn",
    age:30,
    qualification:"BE",
    specification:"civil Engineering"
  },
  {
    name:"dcgbhmn",
    age:13,
    qualification:"BE",
    specification:"electronix Engineering"
  },
  {
    name:"candgg",
    age:23,
    qualification:"BE",
    specification:"computer Engineering"
  },
  {
    name:"candgg",
    age:23,
    qualification:"BE",
    specification:"computer Engineering"
  },
  {
    name:"candgg",
    age:23,
    qualification:"BE",
    specification:"computer Engineering"
  }
]
}
