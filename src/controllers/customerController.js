const controller = {};

controller.list = (req, res) => {     //Cuando se entra a la ruta principal de la pagona se responde algo 
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, rows) => {
            if (err) {
                res.json(err);
            }
            console.log(rows);
            res.render('customers', {
                data: rows
            });
        });
    });
};


module.exports = controller;