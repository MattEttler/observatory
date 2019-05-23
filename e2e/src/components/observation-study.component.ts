import { $, ElementFinder } from "protractor";
import { IBaseComponent } from "./base.component";

export class ObservationStudyComponent implements IBaseComponent {
    public elementSelector: string;
    public elementFinder: ElementFinder;
    public observationImg: ElementFinder;
    public observationTimestamp: ElementFinder;
    public positiveReactionButton: ElementFinder;
    public negativeReactionButton: ElementFinder;

    constructor() {
        this.elementSelector = "o9y-study";
        this.elementFinder = $(this.elementSelector);
        this.observationImg = $(`${this.elementSelector} .imageItself`);
        this.observationTimestamp = $(`${this.elementSelector} .imageHolder span`);
        this.positiveReactionButton = $("#positive-reaction-btn");
        this.negativeReactionButton = $("#negative-reaction-btn");
    }

    public async hasReaction(reactionType: string): Promise<boolean> {
        return $(`${this.elementSelector}.${reactionType.toLowerCase()}-reaction`).isPresent();
    }
}
