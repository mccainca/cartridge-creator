import { Component, OnInit, Input } from '@angular/core';
import { ThemeComponent }      from '../theme.component';

@Component({
  selector: 'app-wb',
  templateUrl: './wb.component.html',
  styleUrls: ['./wb.component.scss']
})
export class WbComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
