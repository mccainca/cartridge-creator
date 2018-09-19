import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCreatorComponent } from './cart-creator.component';

describe('CartCreatorComponent', () => {
  let component: CartCreatorComponent;
  let fixture: ComponentFixture<CartCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
