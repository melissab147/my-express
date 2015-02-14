module.exports = function(app){
    app.get('/repo/list', function(req, res) {

        // get the repos collection
        var repos = app.db.get('repos')

        // empty query to get all repos
        var q = {}

        // execute the query
        repos.find(q, function(err, repo) {

            res.render('repoList.jade', {
                repos: repo
            })
        })

    })
}
