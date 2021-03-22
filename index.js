let db = require("../db");
let funcionario = require("../funcionario");

async function sincronizar() {
    await db.sync({force:true});
}
sincronizar();

