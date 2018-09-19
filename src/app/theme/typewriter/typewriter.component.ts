import { Component, OnInit, Input } from '@angular/core';
import { ThemeComponent }      from '../theme.component';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
