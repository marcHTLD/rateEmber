# Evaluation
Modular aufgebaut Projekt erstellen mit Ember cli

ember serve

Ordnerstruktur ist schon vorgegeben: models, routes, styles, components, …

application.hbs --> einzelne Komponenten

Component: .hbs und .js File

.hbs :

* import Component from '@ember/component';
* var comments = [];
* export default Component.extend({
* lastName: 'Glowacki', favoriteFramework: 'Ember', });
* {{input class="form-control" placeholder="Dornbirn" value=location}}
* <button {{action "addComment"}} id="submit" type="submit" class="btn btn-primary button-right-bottom">Absenden</button>

Ähnlich wie React oder Angular – basiert auch darauf


# webapp

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd webapp`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
