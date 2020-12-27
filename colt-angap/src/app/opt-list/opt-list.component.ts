import { Component, OnInit } from '@angular/core';
import { StartOption } from '../startOption'



@Component({
  selector: 'app-opt-list',
  templateUrl: './opt-list.component.html',
  styleUrls: ['./opt-list.component.css']
})
export class OptListComponent implements OnInit {

  hro: StartOption = {
    id: 1,
    name: 'Wwwi'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
