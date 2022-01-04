# \<firebase-wrapper>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.
This component contains a firebase-loginbutton component and a firebase-crud component.
Show the loginbutton component to allow users to login with their firebase account.
Expose the firebaseCRUD component to allow users to create, read, update and delete data from firebase.
Dispatch event: wc-ready when the user is logged in firebase, dispatching wc-ready event, and firebase-crud.firebaseApp is ready to CRUD, dispatching wc-ready event.

## Installation

```bash
npm i firebase-wrapper
```

## Usage

```html
<script type="module">
  import 'firebase-wrapper/firebase-wrapper.js';
</script>

<firebase-wrapper></firebase-wrapper>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
