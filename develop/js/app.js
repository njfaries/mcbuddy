QB.init(QBAPP.appID, QBAPP.authKey,QBAPP.authSecret );

//create a new user 
var params = {login: 'cyc', password: 'cyc93826'};
 
var er, res;

QB.users.create(params, function(err, result) {
    console.log("error\n");
    console.log(err);
    console.log("result:\n");
    console.log(result);
    er= err;
    res = result;
});



