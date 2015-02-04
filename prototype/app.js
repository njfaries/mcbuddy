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

$("#registrationForm").submit(function(evt) {
	evt.preventDefault();
    var info = {};
    
    $(this)
    .children("input[type!='submit']")
    .map(function(i, v) {
        info[$(v).attr("name")] = $(v).val();
    });
        
	console.log(info);
});

QB.createSession(function(err, result) {
    var params = {login: 'garry', password: 'garry5santos'};

    if(false)
    QB.users.create(params, function(err, result) {
        if(err) console.log("Error: " + err);
	if(result) console.log("Result: " + result);
    });
});
