module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ["airbnb-base"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		"prettier/prettier": 0,
		"linebreak-style": 0,
		"no-tabs": 0,
		indent: 0,
		quotes: 0,
		"no-else-return": 0,
		"object-curly-newline": 0,
	},
};
