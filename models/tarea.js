const {v4: uudiv4} = require('uuid')

class Tarea {

    id = '';
    desc = '';
    competadoEn = null;

    constructor ( desc ){
        this.id = uudiv4();
        this.desc = desc;
        this.competadoEn = null;
    }

}









module.exports = Tarea