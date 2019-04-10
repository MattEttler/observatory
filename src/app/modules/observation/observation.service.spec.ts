import { ObservationService } from "./observation.service";
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

describe('ObservationService', () => {
    let service: ObservationService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ObservationService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.get(ObservationService);
    });

    it('should successfully upload an observation', async(() => {
        const blob = new Blob([''], { type: 'text/html' });
        blob['name'] = 'filename';
        const file = blob as File;

        service.uploadObservationImage(file)
            .subscribe(results => {
                expect(results).toBeTruthy();
            });
    }));
});