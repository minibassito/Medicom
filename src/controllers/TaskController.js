function index(req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registro', (err, registro) => {
            if(err) {
                res.json(err);
            }
            res.render('tasks/index', { registro });
        });
    });
    res.render('tasks/index');
}

function create(req, res) {
    res.render('tasks/create');
}

function store(req, res) {
    const data = req.body;

    req.getConnection((err,conn) => {
        conn.query('INSERT INTO registro SET ?', [data], (err,rows) => {
            res.redirect('/tasks');
        });
    });
}

module.exports = {
    index: index,
    create: create,
    store:store,
};