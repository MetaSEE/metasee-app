import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVirtualworldComponent } from './search-virtualworld.component';

describe('SearchVirtualworldComponent', () => {
  let component: SearchVirtualworldComponent;
  let fixture: ComponentFixture<SearchVirtualworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVirtualworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVirtualworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
