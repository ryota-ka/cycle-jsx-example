import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import { html } from 'snabbdom-jsx';

function main ({ DOM }) {
  return {
    DOM: xs.of(
      <div>
        <h1>Hello, world!</h1>
      </div>
    ),
  };
}

run(main, {
  DOM: makeDOMDriver('#app'),
});
