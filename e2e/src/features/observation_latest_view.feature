Feature: observation latest view

    @CucumberScenario
    Scenario: multiple observations exist in the system
        Given there is at least one observation
        When the observation component is initiated
        Then the latest observations details are shown