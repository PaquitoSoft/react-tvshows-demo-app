# ReactJS tutorial (tvshows website)

## Chapter One: First steps
### NPM and Yarn
### Create react app or own webpack configuration
### Install webpack, webpack-dev-server
### Create default webpack configuration: very simple
### First super simple app (fetch user's github repos)
#### gaearon (Dan Abramov); addyosmani; petehunt; nzakas
### Create eslint configuration
#### Install: http://eslint.org/docs/user-guide/getting-started
#### Show how to setup in webpack: eslint-loader
#### webpack-dev-server errors overlay (https://webpack.js.org/configuration/dev-server/#devserver-overlay)

## Chapter Two: Getting into React
### Install react, react-dom, babel-core, babel-loader, babel-preset-es2015, babel-preset-react, .babelrc
### Create App, form and resultsList components
### State vs Props (load sync data): tvshows grid + click to see title
### Load async data

## Chapter Three: Testing React
### Jest (npm i jest babel-jest)
### enzyme (npm i enzyme react-test-renderer)
### jest watch mode
### snapshot testing (npm i enzyme-to-json) - first snapshot creation
### Testing callbacks (mocks): https://facebook.github.io/jest/docs/mock-functions.html#content
### Async testing (http://www.wheresrhys.co.uk/fetch-mock/) - throw error inside the resolved promise to prove it (return promise or use done callback pattern) - if I use mount in app tests, I have 100% coverage
### code coverage (+ thresholds) - change mount/shallow in app tests to see the tests blow up because of coverage

## Chapter Four: TvShow Catalogue App
## Code organization: config, services, plugins (fetch), containers vs. components
### Home page (webpack style-loader + css-loader, component local state): lifecycle hooks
### Routing (react-router + redux-first-router after Redux)
### TvShow page + Season page
### Code splitting (AsyncRoute)

## Chapter Five: Say hello to Redux
### Store + Reducers + Actions
### react-redux (connecting things)
### Redux DevTools

## Chapter Six: Async Redux
### Thunks vs Sagas
### components local state to store
### Testing Redux

## Chapter Seven: Build for production
### webpack-stats, bundle analyzer, https://webpack.github.io/analyse/

## Chapter Eight: Server side rendering

## Chapter Nine: Preact + Inferno
