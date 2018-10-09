import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ThemeDirective } from '../theme/theme.directive';
import { ThemeItem }      from '../theme/theme-item';
import { ThemeComponent } from '../theme/theme.component';
import { ThemeService }      from '../theme/theme.service';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart-creator',
  templateUrl: './cart-creator.component.html',
  styleUrls: ['./cart-creator.component.scss']
})


export class CartCreatorComponent implements OnInit,OnDestroy {
  @Input() themes: ThemeItem[];
  @ViewChild(ThemeDirective) themeHost: ThemeDirective;
  albumInfo: FormGroup = new FormGroup({});
  panelOpenState = false;
  data: ThemeComponent;
  programs = ['One','Two','Three','Four'];
  tracks = ['One','Two','Three','Four','Five','Six'];
  albumArtUrlSelector:boolean = true;
  themeId:number = 0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,private themeService: ThemeService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.themes = this.themeService.getThemes();
    this.albumInfo = this._formBuilder.group({
         theme: ['', Validators.required],
         artistName: ['', Validators.required],
         albumName: ['', Validators.required],
         albumArtUrl: ['', Validators.required],
         programs: this._formBuilder.array([]),
    });

    const programArray = <FormArray>this.albumInfo.controls['programs'];

    _.forEach(this.programs, (program: any) =>{
      const newProgram = this.initArray();
     _.forEach(this.tracks, (track: any) =>{
       const newTrack = new FormControl('')
       newProgram.push(newTrack);
     });
     programArray.push(newProgram);

   });

   this.onChanges();

  }

  initArray() {
      return this._formBuilder.array([]);
  }

  ngOnDestroy() {

  }

  onThemeSelectionChanged(event) {
    this.themeId = _.findIndex(this.themes, {displayName: event.value});
    this.loadComponent(this.themeId ,{});
  }

  onUploadAlbumArt(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        this.albumInfo.value.albumArtUrl = reader.result;
      };
 }

  }

  loadComponent(id,data) {
    let themeItem = this.themes[id];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(themeItem.component);

    let viewContainerRef = this.themeHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ThemeComponent>componentRef.instance).data = data;
  }

  print(): void {

    window.print();
}

  onChanges(): void {
    this.albumInfo.valueChanges.subscribe(val => {
      this.loadComponent(this.themeId ,val)
    });
  }
}
