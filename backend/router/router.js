var express = require('express')
var router = express.Router()
var db = require("../configure/database")
var ObjectId = require('mongodb').ObjectId; 


router.get("/", function(req, res){
    var collection = db.get().collection('todos')
    collection.find().toArray(function(err, docs){
        if(err) throw err
        res.send(docs) 
    })
})
router.get("/todo/:id", function(req, res){
    id = req.params.id;
    console.log(id)
    var collection = db.get().collection('todos')
    collection.findOne({_id: ObjectId(id)}, function(err, docs){
        if(err) throw err
        res.send(docs) 
    })
})

router.post("/add", function(req, res){
    var newTodo = req.body
    if (newTodo){
        var collection = db.get().collection('todos')
        collection.insert(newTodo, function(err, result){
            if(err){
                throw err;
            } else {
                res.send(req.body)
            }
        })
    }
})

router.post("/update/:id", function(req, res){
    var id = req.params.id
    console.log(id)
    var todo = req.body
    console.log(todo)
    if(todo && id){
        var collection = db.get().collection('todos')
        collection.update({_id: ObjectId(id)}, {$set: todo}, function(err, result){
            if(err) throw err
            res.send(result)
        })
    }
})

router.delete("/delete/:id", function(req, res){
    var id = req.params.id;
    if(id){
        var collection = db.get().collection('todos')
        collection.remove({_id: ObjectId(id)}, function(err, result){
            if(err){
                throw err;
            } else {
                res.send(result)
            }
        })
    }

})

module.exports = router