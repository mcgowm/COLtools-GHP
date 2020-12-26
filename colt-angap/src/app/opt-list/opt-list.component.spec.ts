import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptListComponent } from './opt-list.component';

describe('OptListComponent', () => {
  let component: OptListComponent;
  let fixture: ComponentFixture<OptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
