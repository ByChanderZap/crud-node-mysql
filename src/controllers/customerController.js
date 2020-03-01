const controller = {};

controller.list = (req, res) => {     //Cuando se entra a la ruta principal de la pagona se responde algo 
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: rows
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, rows) => {//Voy a ingresar dentro de la tabla customer, los datos guardados en 'data'  
            res.redirect('/');
        });    
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, rows) => {
            res.render('customer-edit', {
                data: rows[0]
            });
        });
    });  
};

controller.delete = (req, res) => {
    const { id } = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

controller.saveEdit = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;