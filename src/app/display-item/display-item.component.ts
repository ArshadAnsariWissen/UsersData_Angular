import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit{
  @Input() element : { name: string; email: string; mobile: number};
  constructor() {
  }

  ngOnInit() {
  }

}
