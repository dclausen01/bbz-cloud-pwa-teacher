module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,js,ico,html,json}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	importScripts: [
    // Füge hier den Pfad zum aktualisierten Service Worker-Code hinzu
    'custom-notifications.js',
  ],
};