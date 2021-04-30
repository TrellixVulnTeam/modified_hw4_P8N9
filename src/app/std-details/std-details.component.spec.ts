import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDetailsComponent } from './std-details.component';

describe('StdDetailsComponent', () => {
  let component: StdDetailsComponent;
  let fixture: ComponentFixture<StdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
