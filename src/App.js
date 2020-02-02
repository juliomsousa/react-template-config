import React from 'react';

function App() {
	return (
		<div className="App">
			<p>Basic styles template</p>
			<p>Content:</p>
			<ul>
				<li>.editorconfig</li>
				<li>.eslintrc.js</li>
				<li>.prettierrc</li>
			</ul>

			<code>
				// ES Lint installation <br />
				>> yarn add eslint -D <br />
				>> yarn eslint --init <br />
				<br />
				// Prettier installation <br />
				>> yarn add prettier eslint-config-prettier eslint-plugin-prettier
				babel-eslint -D <br />
				<br />
				// VS Code Settings: <br />
				"editor.codeActionsOnSave":{' '}
				{`{
		"source.fixAll": true
	}`}
				<br />
				<br />
				Copy/paste or compare the files listed above and have fun!
			</code>
		</div>
	);
}

export default App;
