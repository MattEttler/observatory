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

    it('should create the observation service', async(() => {
        expect(!!service);
    }));
});