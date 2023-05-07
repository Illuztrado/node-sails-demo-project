const sailsHookGrunt = require("sails-hook-grunt");

module.exports = {
    process: function(req, res){

        var x = req.body;
        var hash = req.body.job.hash;
        if (hash.length < 10) {
            return res.badRequest("Invalid hash length");
        }

        var fullName = req.body.applicant.firstName + " " + req.body.applicant.lastName;
        var profile = {
            name: fullName,
            emailAddress: req.body.applicant.email,
            resume: req.body.applicant.resume,
            phoneNumber: req.body.applicant.phoneNumber || null
        }

        var json = { profile };
        //submit applicant
        var options = {
            url: "https://webhook.site/2de9bed3-4812-45c2-b570-bbc6637dd8f9/",
            json: json
        }
        sails.request.post(options, function (err, result) {
            console.log(result);
            if (result.statusCode == 200) {
                console.log("Success");
                // return;
            }
            else {
                // return res.badRequest();
            }
        });

        return res.send()
    },
    newprocess: function(req, res){
        var x = req.body;
        var hash = req.body.job.hash;
        if (hash.length < 10) {
            return res.badRequest("Invalid hash length");
        }

        var fullName = req.body.applicant.firstName + " " + req.body.applicant.lastName;
        var profile = {
            name: fullName,
            emailAddress: req.body.applicant.email,
            resume: req.body.applicant.resume,
            phoneNumber: req.body.applicant.phoneNumber || null
        }

        var json = {profile};
        //submit applicant
        var options = {
            url: "https://webhook.site/2de9bed3-4812-45c2-b570-bbc6637dd8f9/",
            json: json
        }
        sails.request.post(options, function(err, result){
            console.log(result);
            if (result.statusCode == 200) {
                console.log("Success");
                // return;
            }
            else {
                return res.badRequest();
            }
        });

        //submit click
        sails.request.get("https://webhook.site/2de9bed3-4812-45c2-b570-bbc6637dd8f9/" + req.body.meta.clickId, function(err, result){
            console.log(result);
            if(result.statusCode == 200){
                console.log("Success");
            }
            else{
                return res.badRequest();
            }
        })
        return res.send()
    }
}