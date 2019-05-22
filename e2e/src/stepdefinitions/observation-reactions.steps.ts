import { expect } from "chai";
import { Given, Then, When } from "cucumber";
import { $ } from "protractor";
import { ObservationStudyComponent } from "../components/observation-study.component";

const observationStudyComponent = new ObservationStudyComponent();

Given(/^an observation$/, async () => {
    await expect(observationStudyComponent.elementFinder.isPresent())
        .to.eventually.equal(true);
    await expect(observationStudyComponent.observationImg.getAttribute("src"))
        .to.eventually.not.equal(undefined);
});

When(/^I react positively to the observation$/, async () => {
    await observationStudyComponent.positiveReactionButton.click();
});

When(/^I react negatively to the observation$/, async () => {
    await observationStudyComponent.negativeReactionButton.click();
});

Then(/^I should be notified that the system acknowledged my "([^"]*)" reaction$/, async (reactionType: string) => {
    await expect(observationStudyComponent.hasReaction(reactionType))
        .to.eventually.equal(true);
});
