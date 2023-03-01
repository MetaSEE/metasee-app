import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagemenuComponent } from './homepagemenu.component';

describe('HomepagemenuComponent', () => {
  let component: HomepagemenuComponent;
  let fixture: ComponentFixture<HomepagemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
