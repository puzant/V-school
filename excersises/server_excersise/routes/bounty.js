var express = require('express');
var bountyRouter = express.Router();
var uuid = require('uuid');
var bounties = [];

var firstBounty = {
    name: "james",
    price: 100,
    type: "sith",
    living: false,
    _id: uuid.v4()
}

bounties.push(firstBounty);

bountyRouter.route('/')

    .get(function (req, res) {
        res.send(bounties);
    })

    .post(function (req, res) {
        var newObj = req.body;
        newObj._id = uuid.v4();


        bounties.push(newObj);
        res.send(newObj);
    })

bountyRouter.route('/:id')
    .get(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === req.params.id) {
                var obj1 = bounties[i];
            }
        }
        res.send(obj1);
    })

    .delete(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {

            if (bounties[i]._id == req.params.id) {
                var arr = bounties.splice(i, 1);
            }

        }
        var data = {
            message: 'succesfully deleted bounty',
            deleteobj: arr[0]
        }
        res.send(data);
    }, function (err) {
        res.send(err);
    })

    .put(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === req.params.id) {
                // replace old bounty object with new bounty object
                bounties[i] = req.body;
                var newBounty = bounties[i];
            }
        }
        res.send(newBounty);
    })

module.exports = bountyRouter;
