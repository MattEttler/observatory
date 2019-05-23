import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyComponent } from './study.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservationService } from '../observation.service';
import { of } from 'rxjs';

describe('StudyComponent', () => {
  let component: StudyComponent;
  let fixture: ComponentFixture<StudyComponent>;
  let compiled: HTMLElement;
  let observationService: ObservationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [StudyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    observationService = TestBed.get(ObservationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('reaction buttons', () => {
    it('should record positive reactions', () => {
      const positiveReactionBtn: HTMLButtonElement = compiled.querySelector('#positive-reaction-btn');
      spyOn(observationService, 'recordReaction').and.returnValue(of(true));

      positiveReactionBtn.click();

      expect(observationService.recordReaction).toHaveBeenCalledWith('positive');
    });
    it('should record negative reactions', () => {
      const negativeReactionBtn: HTMLButtonElement = compiled.querySelector('#negative-reaction-btn');
      spyOn(observationService, 'recordReaction').and.returnValue(of(true));

      negativeReactionBtn.click();

      expect(observationService.recordReaction).toHaveBeenCalledWith('negative');
    });
  });
});
