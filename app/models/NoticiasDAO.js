function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.saveNoticias = function(noticia, calback) {
    //console.log(noticia);
    this._connection.query('insert into noticias set ? ', noticia, calback);
}

module.exports = function(){
    return NoticiasDAO;
}