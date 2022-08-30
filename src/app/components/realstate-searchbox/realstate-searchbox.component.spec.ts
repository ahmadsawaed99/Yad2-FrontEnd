import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstateSearchboxComponent } from './realstate-searchbox.component';

describe('RealstateSearchboxComponent', () => {
  let component: RealstateSearchboxComponent;
  let fixture: ComponentFixture<RealstateSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealstateSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
