import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchedEventComponent } from './serched-event.component';

describe('SerchedEventComponent', () => {
  let component: SerchedEventComponent;
  let fixture: ComponentFixture<SerchedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchedEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
