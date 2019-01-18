[React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

#### React-Redux
- Do not need to dispatch a single action synchronously.
- Do not attempt to call your API from a reducer. Reducer is synchronous and passive, it only modifies the state.
