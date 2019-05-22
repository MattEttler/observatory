import { assert, expect } from "chai";
import { Given, Then, When } from "cucumber";
import { browser, protractor } from "protractor";
import { ObservationDeckComponent } from "../components/observation-deck.component";

const observationDeck: ObservationDeckComponent = new ObservationDeckComponent();

Given(/^there is at least one observation$/, async () => {
    // TODO this is a poor test :(
});

When(/^the observation component is initiated$/, async () => {
    await expect(browser.getCurrentUrl()).to.eventually.equal(`${browser.baseUrl}/observation`);
});

Then(/^the latest observations details are shown$/, async () => {
    await expect(observationDeck.observationStudyComponent.observationImg.isPresent()).to.eventually.equal(true);
    await expect(observationDeck.observationStudyComponent.observationTimestamp.isPresent()).to.eventually.equal(true);
});
