var data = [{item : "get milk"}, {item: "walk dog"}, {item: "kick some coddign ass"}]

module.exports = function(app) {

app.get('/todo', function(req, res) {
    res.render('todo', {todo: data});
});

app.post('/todo', function(req, res) {
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', function(req, res) {
    data = data.filter(function(todo) {
        return (todo.item.replace(/ /g, '') !== req.params.item.replace(/ /g, ''))
    });
    res.json(data)
});
}