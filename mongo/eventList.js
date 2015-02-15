module.exports = function(app){
    
    app.get('/event/list', function(req, res) {

        // get the repos collection
        var events = app.db.get('events')

        // empty query to get all repos
        var q = {}

        // execute the query
        events.find(q, {
            limit: 30
        }, function(err, e) {

            res.render('eventList.jade', {
                events: e
            })
        })

    })
}
