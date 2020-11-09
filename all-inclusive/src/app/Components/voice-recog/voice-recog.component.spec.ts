import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRecogComponent } from './voice-recog.component';

describe('VoiceRecogComponent', () => {
  let component: VoiceRecogComponent;
  let fixture: ComponentFixture<VoiceRecogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRecogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
