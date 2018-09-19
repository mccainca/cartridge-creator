import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ThemeDirective } from '../theme/theme.directive';
import { ThemeItem }      from '../theme/theme-item';
import { ThemeComponent } from '../theme/theme.component';
import { ThemeService }      from '../theme/theme.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart-creator',
  templateUrl: './cart-creator.component.html',
  styleUrls: ['./cart-creator.component.scss']
})


export class CartCreatorComponent implements OnInit,OnDestroy {
  @Input() themes: ThemeItem[];
  @ViewChild(ThemeDirective) themeHost: ThemeDirective;
  formGroup: FormGroup = new FormGroup({});
  panelOpenState = false;
  data: ThemeComponent;
  programs = ['one','two','three','four'];
  tracks = ['one','two','three','four','five','six'];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private themeService: ThemeService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.themes = this.themeService.getThemes();

    this.formGroup = this._formBuilder.group({
         theme: ['', Validators.required],
         artistName: ['', Validators.required],
         albumName: ['', Validators.required],
         albumArtUrl: ['', Validators.required]
    });

    // _.forEach(this.programs, (program: any) =>{
    //   console.log(this.tracks);
    //   _.forEach(this.tracks, (track: any) =>{
    //     this.formGroup.addControl(program + '_' + track, ['', Validators.required]);
    //   });
    // });


  }

  ngOnDestroy() {

  }

  onThemeSelectionChanged(event) {
    let id = _.findIndex(this.themes, {displayName: event.value});
    this.loadComponent(id);
  }

  loadComponent(id) {
    let themeItem = this.themes[id];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(themeItem.component);

    let viewContainerRef = this.themeHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    // (<ThemeComponent>componentRef.instance).data = {artist: "Hi"};
  }

}
