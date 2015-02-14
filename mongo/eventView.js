module.exports = function(app){

    app.get('/repo/view/:name', function(req, res) {

        // get the repos collection
        var repos = app.db.get('repos')

		//query to get repo with matching name
        var q = {
            'name': req.params.name
        }

        repos.findOne(q, function(err, repo) {

            res.render('repoView.jade', {
                repo: repo
            })        		
        })
    })
}
