import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbVirtualworldComponent } from './thumb-virtualworld.component';

describe('ThumbVirtualworldComponent', () => {
  let component: ThumbVirtualworldComponent;
  let fixture: ComponentFixture<ThumbVirtualworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbVirtualworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbVirtualworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
