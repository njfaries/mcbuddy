var CONFIG = {
    appID : 18326,
    authKey : "Wcju7OUTLFgu7TU",
    authSecret : "Tv8LburBeZtuCzz",
    debug : {
        ssl: false,
        debug: true
    }
}

QB.init(CONFIG.appID, CONFIG.authKey, CONFIG.authSecret, CONFIG.debug);
QB.createSession(function(err, result) {
    var params = {login: 'garry', password: 'garry5santos'};

    if(false)
    QB.users.create(params, function(err, result) {
        if(err) console.log("Error: " + err);
	if(result) console.log("Result: " + result);
    });
});
