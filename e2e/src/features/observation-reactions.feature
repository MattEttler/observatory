Feature: observation reactions

    @CucumberScenario
    Scenario: observers can positively react to observations
        Given an observation
        When I react positively to the observation
        Then I should be notified that the system acknowledged my "positive" reaction

    @CucumberScenario
    Scenario: Observers can negatively react to observations
        Given an observation
        When I react negatively to the observation
        Then I should be notified that the system acknowledged my "negative" reaction