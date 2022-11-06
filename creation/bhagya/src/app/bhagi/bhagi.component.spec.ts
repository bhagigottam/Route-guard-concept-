import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagiComponent } from './bhagi.component';

describe('BhagiComponent', () => {
  let component: BhagiComponent;
  let fixture: ComponentFixture<BhagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhagiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
