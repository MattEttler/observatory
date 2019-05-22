import { $, ElementFinder } from "protractor";

export class ObservationDeckPage {
    public latestObservationImg: ElementFinder;
    public latestObservationTimestamp: ElementFinder;

    constructor() {
        this.latestObservationImg = $(".imageItself");
        this.latestObservationTimestamp = $(".imageHolder span");
    }
}
