import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpexComponent } from './ampex.component';

describe('AmpexComponent', () => {
  let component: AmpexComponent;
  let fixture: ComponentFixture<AmpexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
