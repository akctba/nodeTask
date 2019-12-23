function Noticias(connection) {
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

Noticias.prototype.saveNoticias = function(noticia, calback) {
    this._connection.query('insert into noticias set ? ',noticia, calback);
}

module.exports = function(){
    return Noticias;
}