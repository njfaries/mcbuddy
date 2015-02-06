"use strict";

var CONFIG = {
    appID : 19286,
    authKey : "DwbDzOcrS28uXGj",
    authSecret : "EO9Y9Eq82QA8MPT",
    debug : {
        ssl: false,
        debug: true
    }
}

function shittyDebugCallback(err, result) {
    if(err) alert("Error: " + JSON.stringify(err));
    if(result) console.dir("Result: " + result);
}

QB.init(CONFIG.appID, CONFIG.authKey, CONFIG.authSecret, CONFIG.debug);
QB.createSession(function(err, result) {shittyDebugCallback});

function scrapeForm(form) {
    var info = {};

    $(form)
    .find("input[type!='submit']")
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

    QB.users.create(info, function(err, result) {
        if(err) {
            alert(err.detail);
        } else {
            alert("Registration successful!");
            window.location.href = "/profile.html";
            QB.login(info, shittyDebugCallback);
        }
    });
});

$("#loginForm").submit(function(evt) {
    evt.preventDefault();
    var info = scrapeForm(this);
    // TODO check if session is valid
    
    QB.login(info, function(err, result) {
        if(err) {
            alert(err.detail);
        } else {
            window.location.href = "/profile.html";
        }
    });
});
