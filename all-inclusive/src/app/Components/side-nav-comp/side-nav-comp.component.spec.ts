import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCompComponent } from './side-nav-comp.component';

describe('SideNavCompComponent', () => {
  let component: SideNavCompComponent;
  let fixture: ComponentFixture<SideNavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
