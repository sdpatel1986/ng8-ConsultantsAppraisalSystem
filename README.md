# Consultants Appraisal System

- This project is for Consultant evaluation, consists mainly of 2 pages; this first one is a listing page to display consultants and the other is to evaluate consultant.
- All the data used in this application is coming from json server which reads from `src/mocks/data.json` file.
- In the consultant's page we display all the consultants in a list view and some details for each consultant and also no of evaluations with the average total score.
- the evaluation page is loading questions from the mock server, and display these questions according to the question type. right now we only have two types of question (free-text question and rating question). After the user answers all the questions, we will calculate the total score based on the rating file and store the whole evaluation in the data.json file.

## Development server

This Application is using json-server to generate mock data, so in order to run it use `npm run serve:mock` and Navigate to `http://localhost:4200/`. this will start both the mock server and the application.

## production 

To Deploy this Application for production, you will need to deploy the json-server file in a server and update environment.prod.ts file with the server url. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
