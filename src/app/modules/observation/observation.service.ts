import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ObservationService {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public uploadObservationImage(file: File): Observable<boolean> {
        const endpoint = `${environment.observatoryApiEndpoint}/observation`;
        const formData: FormData = new FormData();
        formData.append('fileKey', file, file.name);

        return this._httpClient
            .post(endpoint, formData)
            .pipe(
                map(() => true)
            );
    }
}
