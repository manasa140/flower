import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerorderComponent } from './flowerorder.component';

describe('FlowerorderComponent', () => {
  let component: FlowerorderComponent;
  let fixture: ComponentFixture<FlowerorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
