'use strict';

import {render, h} from 'preact';

const root = document.createElement('div');
document.body.appendChild(root);

const {Root} = require('./Root');

render((
	<Root/>
), root);

if (module.hot) {
	require('preact/debug');

	module.hot.accept('./Root', () => {
		const {Root} = require('./Root');
		render(<Root/>, root, root.firstChild as HTMLElement);
	});
}

