const People = require('../models/people')
module.exports = {
create: (req, res, next) => {
    let people = new People(req.body)
    beer.save()
    .then(saved => res.json(saved))
    .catch(e => next(e))
   
},
find: (req, res, next) => {
    People.findById(req.params.id)
    .then(user => res.json(user))
    .catch(e => next(e))
},
findAll: (req, res) => {
    People.find()
    .then(users => res.json(users))
    .catch(e => next(e))
},
update: (req, res, next) => {
    People.findOneAndUpdate(req.params.id, req.body, {new: true})
    .then(saved => {
    res.json(saved)
    })
    .catch(e => next(e))
},
delete: (req, res) => {
    People.findOneAndRemove(req.params.id)
    .then(deleted => {
    res.json({
    message: 'People deleted',
    id: deleted._id
    })
    })
    .catch(e => next(e))
}
}