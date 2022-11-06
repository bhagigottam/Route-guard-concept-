import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagyasreeComponent } from './bhagyasree.component';

describe('BhagyasreeComponent', () => {
  let component: BhagyasreeComponent;
  let fixture: ComponentFixture<BhagyasreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhagyasreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagyasreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
