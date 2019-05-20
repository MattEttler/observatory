import { assert, expect } from "chai";
import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { ObservationDeckPage } from "../pages/observationDeck.page";

const search: ObservationDeckPage = new ObservationDeckPage();

Given(/^there is at least one observation$/, async () => {
    // TODO this is a poor test :(
});

When(/^the observation component is initiated$/, async () => {
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://o9y.soma.farm/observation");
});

Then(/^the latest observations details are shown$/, async () => {
    await expect(search.latestObservationImg.isPresent()).to.eventually.equal(true);
    await expect(search.latestObservationTimestamp.isPresent()).to.eventually.equal(true);
});
