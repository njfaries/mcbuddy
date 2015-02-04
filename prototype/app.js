"use strict";

var CONFIG = {
    appID : 18326,
    authKey : "Wcju7OUTLFgu7TU",
    authSecret : "Tv8LburBeZtuCzz",
    debug : {
        ssl: false,
        debug: true
    }
}

function shittyDebugCallback(err, result) {
    if(err) alert("Error: " + err);
    if(result) console.log("Result: " + result);
}

QB.init(CONFIG.appID, CONFIG.authKey, CONFIG.authSecret, CONFIG.debug);
QB.createSession(function(err, result) {shittyDebugCallback});

function scrapeForm(form) {
    var info = {};

    $(form)
    .children("input[type!='submit']")
    .each(function(i, v) {
        info[$(v).attr("name")] = $(v).val();
    });
    return info;
};

function logOut() {
    QB.destroySession(shittyDebugCallback);
    QB.createSession(function(err, result) {shittyDebugCallback});
};

$("#registrationForm").submit(function(evt) {
	evt.preventDefault();
    var info = scrapeForm(this);
    // TODO check if session is valid

    QB.users.create(info, shittyDebugCallback);
});

$("#loginForm").submit(function(evt) {
    evt.preventDefault();
    var info = scrapeForm(this);
    // TODO check if session is valid

    QB.login(info, shittyDebugCallback);
});