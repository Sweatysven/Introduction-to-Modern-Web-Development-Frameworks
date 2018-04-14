// express router, import
const router = require('express').Router();
const Todo = require('../models/todo');

// example route, req = request, res = response
router.get('/', function(req, res) {
    // find function
    Todo.find({}).then(function(results) {
        // create collections (todos and doneTodos)
        let todos = results.filter(function(todo) {
            return !todo.done;
        });

        let doneTodos = results.filter(function(todo) {
            return todo.done;
        });

        res.render('index', {todos: todos, doneTodos: doneTodos});
    });
});

// create a route
router.post('/todos', function(req, res){
    // takes what comes in the body and gives me a new to do - which can create a new to do in the database
    let newTodo = new Todo({ description: req.body.description });

    // save this to do to the database
    newTodo.save().then(function(result) {
            console.log(result);
            res.redirect('/');
            // catch errors
        }).catch(function(err) {
            console.log(err);
            res.redirect('/');
    });
});

// post to done
router.post('/todos/:id/completed', function(req, res) {
    let todoId = req.params.id;

    // new function, find todo by id. Create query over time
    Todo.findById(todoId).exec().then(function(result) {
        result.done = !result.done;
        // a mongoose model is returned 
        return result.save();
    })
        .then(function(result) {
        res.redirect('/');
    });
});

// export
module.exports = router;