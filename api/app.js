var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

var Sequelize = require('sequelize')
var sequelize = new Sequelize('sqlite://:memory:')

var Todo = sequelize.define('todo', {
    name: Sequelize.STRING
})

sequelize.sync().then(function() {
    return Todo.create({
        name: 'life'
    })
})

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
});

app.get('/', function (req, res) {
    setTimeout(function () {
        Todo.findAll().then(function(todos) {
            res.json(todos)
        })
    }, 1000)
})

app.get('/:id', function (req, res) {
    setTimeout(function () {
        Todo.findByPrimary(req.params.id).then(function(todo) {
            if (todo) {
                res.json(todo)
            } else {
                res.sendStatus(404)
            }
        })
    }, 1000)
})

app.put('/:id', function (req, res) {
    Todo.findByPrimary(req.params.id).then(function(todo) {
        if (todo) {
            todo.update(req.body).then(() => {
                res.json(todo)
            })
        } else {
            res.sendStatus(404)
        }
    })
})

app.post('/', function (req, res) {
    Todo.create(req.body).then(function(todo) {
        res.json(todo)
    })
})

app.options('/', function(req, res) {
    res.sendStatus(200)
})

app.options('/1', function(req, res) {
    res.sendStatus(200)
})

app.listen(8181, function() {
    console.log('Listening on 8181')
})
