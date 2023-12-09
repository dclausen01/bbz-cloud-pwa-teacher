self.addEventListener('push', function(event) {
  // Überprüfen, ob die Benachrichtigung von der gewünschten Remote-Website kommt
  var remoteSiteURL = 'https://app.schul.cloud'; // Setze die URL der Remote-Website hier ein

  if (event.data && event.data.json && event.data.json.origin === remoteSiteURL) {
    var options = {
      body: event.data.json.body,
      icon: 'path/to/icon.png',
      // Weitere Optionen nach Bedarf
    };

    event.waitUntil(
      self.registration.showNotification('Benachrichtigung von Remote-Site', options)
    );
  }
});