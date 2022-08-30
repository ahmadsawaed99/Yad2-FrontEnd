import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchBoxComponent } from './advanced-search-box.component';

describe('AdvancedSearchBoxComponent', () => {
  let component: AdvancedSearchBoxComponent;
  let fixture: ComponentFixture<AdvancedSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
