//utilizamos multer para poder permitir la subida de archivos al servidor.
const multer = require('multer');

//creamos la variable upload, con multer para definir dónde guardaremos las imagenes y filtramos x tipo de imagen
const upload = multer({
  dest: './imagenes',
  fileFilter: function (req, file, cb) {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/gif" || file.mimetype == "image/jpeg"){
      return cb(null, true);
      } else{ 
        return cb(new Error('Solo archivos jpg, png o gif se permiten'))
      }
  }
}).single('subir_archivo');

module.exports = upload;
