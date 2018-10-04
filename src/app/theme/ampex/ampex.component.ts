import { Component, OnInit, Input } from '@angular/core';
import { ThemeComponent }      from '../theme.component';

@Component({
  selector: 'app-ampex',
  templateUrl: './ampex.component.html',
  styleUrls: ['./ampex.component.scss']
})
export class AmpexComponent implements OnInit {
  @Input() data: any;


  constructor() { }

  ngOnInit() {
  }

}
