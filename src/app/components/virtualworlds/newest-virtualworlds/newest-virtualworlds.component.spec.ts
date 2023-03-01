import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestVirtualworldsComponent } from './newest-virtualworlds.component';

describe('NewestVirtualworldsComponent', () => {
  let component: NewestVirtualworldsComponent;
  let fixture: ComponentFixture<NewestVirtualworldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestVirtualworldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestVirtualworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
