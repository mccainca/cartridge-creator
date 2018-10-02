import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeClubComponent } from './tape-club.component';

describe('TapeClubComponent', () => {
  let component: TapeClubComponent;
  let fixture: ComponentFixture<TapeClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
