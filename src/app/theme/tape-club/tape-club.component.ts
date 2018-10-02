import { Component, OnInit, Input } from '@angular/core';
import { ThemeComponent }      from '../theme.component';

@Component({
  selector: 'app-tape-club',
  templateUrl: './tape-club.component.html',
  styleUrls: ['./tape-club.component.scss']
})
export class TapeClubComponent implements OnInit {
  @Input() data: ThemeComponent;

  constructor() { }

  ngOnInit() {
  }

}
