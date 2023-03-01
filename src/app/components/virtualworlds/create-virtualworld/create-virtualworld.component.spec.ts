import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVirtualworldComponent } from './create-virtualworld.component';

describe('CreateVirtualworldComponent', () => {
  let component: CreateVirtualworldComponent;
  let fixture: ComponentFixture<CreateVirtualworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVirtualworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVirtualworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
