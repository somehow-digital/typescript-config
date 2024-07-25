export default {
	version: '0.2',
	language: 'en',
	import: ['@cspell/dict-de-de'],
	ignorePaths: [
		'node_modules',
		'package.json',
		'pnpm-lock.yaml',
		'.gitignore',
		'.npmrc',
	],
	dictionaries: [
		'en_US',
		'de-de',
		'softwareTerms',
		'typescript',
		'node',
		'html',
		'css',
		'bash',
		'misc',
		'project',
	],
	dictionaryDefinitions: [
		{
			addWords: true,
			name: 'project',
			path: './dictionary.txt',
		},
	],
};
