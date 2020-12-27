import { Component, OnInit } from '@angular/core';
import { StartOption } from '../hro'



@Component({
  selector: 'app-opt-list',
  templateUrl: './opt-list.component.html',
  styleUrls: ['./opt-list.component.css']
})
export class OptListComponent implements OnInit {

  hro = 'WindFFT'

  constructor() { }

  ngOnInit(): void {
  }

}
