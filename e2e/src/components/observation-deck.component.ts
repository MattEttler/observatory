import { $, ElementFinder } from "protractor";
import { ObservationStudyComponent } from "./observation-study.component";
import { IBaseComponent } from "./base.component";

export class ObservationDeckComponent implements IBaseComponent {
    public elementFinder: ElementFinder;
    public observationStudyComponent = new ObservationStudyComponent();

    constructor() {
        this.elementFinder = $("o9y-observation-deck");
    }
}
