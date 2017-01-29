if ('serviceWorker' in navigator) {
	navigator.serviceWorker
						.register('/service-worker.js')
						.then(function(reg) {
							console.log('Service Worker Registered', reg);
						});
} else {
	console.log('Service Worker not supported');
}