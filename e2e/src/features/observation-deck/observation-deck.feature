Feature: observation reactions

    Scenario: observers can positively react to observations
        Given the latest observation
        When I react positively to the observation
        Then I should be notified that the system acknowledged my reaction