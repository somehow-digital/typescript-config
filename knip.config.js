export default {
	entry: ['configuration/*.json'],
	ignoreDependencies: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/github',
		'@semantic-release/npm',
		'@semantic-release/release-notes-generator',
	],
	project: ['configuration/**'],
};
