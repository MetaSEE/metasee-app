import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbEnvironmentComponent } from './thumb-environment.component';

describe('ThumbEnvironmentComponent', () => {
  let component: ThumbEnvironmentComponent;
  let fixture: ComponentFixture<ThumbEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
