import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationComponent } from './observation.component';
import { ObservationService } from '../observation.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('ObservationComponent', () => {
  let component: ObservationComponent;
  let fixture: ComponentFixture<ObservationComponent>;
  let observationService: ObservationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ObservationComponent],
      providers: [ObservationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationComponent);
    component = fixture.componentInstance;
    observationService = TestBed.get(ObservationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should upload all files via the ObservationService', () => {
    const blob = new Blob([''], { type: 'text/html' });
    blob['name'] = 'filename';
    const file = blob as File;
    const fileList: FileList = {
      0: file,
      1: file,
      length: 2,
      item: (index: number) => file
    };

    spyOn(observationService, 'uploadObservationImage').and.returnValue(of(true));
    component.uploadFiles(fileList);

    expect(observationService.uploadObservationImage).toHaveBeenCalledTimes(2);
  });
});
