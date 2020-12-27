import { Component, OnInit } from '@angular/core';
import { StartOption } from '../startOption';
import { OPTNS } from '../mockopt';


@Component({
  selector: 'app-opt-list',
  templateUrl: './opt-list.component.html',
  styleUrls: ['./opt-list.component.css']
})
export class OptListComponent implements OnInit {

  hro = OPTNS
  selectedHero : StartOption;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hro : StartOption): void {
    this.selectedHero = hro;
  }

}
