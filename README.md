# Smoke Test Suite for AVT Sklep application

This project is a test project for a randomly selected e-commerce shop (AVT sklep). It uses Cypress tests written in POM to run smoke tests suite.

## Test Patterns

The Page Object Model pattern is followed for writing tests. This involves creating custom classes which stand for particular application areas and pages. Specific elements of pages are implemented as properties of classes. Interactions with page elements are implemented as classes' methods. 

## Structure

`e2e` - tests with their logics

`support/assertions` - assertions used for verification test step results

`support/helpers` - general supportive methods

`support/page_objects` - application pages implemented as classes

`test_data` - constant data used for tests


## How to Run Tests

1. Install dependencies:

`npm install`

2. Run application under tests:

`npm start`

3. Open Cypress Test Runner:

`npx cypress open`

4. Run tests:

Select the test you want to run from the Cypress Test Runner, or run all tests using the following command:

`npx cypress run`
