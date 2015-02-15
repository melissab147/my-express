module.exports = function(app){

    app.get('/event/view/:id', function(req, res) {

        // get the repos collection
        var events = app.db.get('events')

        //query to get repo with matching name
        var q = {
            'id': req.params.id
        }

        events.findOne(q, function(err, item) {

            res.render('eventView.jade', {
                item: item
            })              
        })
    })
}
