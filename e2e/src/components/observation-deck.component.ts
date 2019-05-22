import { $, ElementFinder } from "protractor";
import { IBaseComponent } from "./base.component";
import { ObservationStudyComponent } from "./observation-study.component";

export class ObservationDeckComponent implements IBaseComponent {
    public elementFinder: ElementFinder;
    public observationStudyComponent = new ObservationStudyComponent();

    constructor() {
        this.elementFinder = $("o9y-observation-deck");
    }
}
