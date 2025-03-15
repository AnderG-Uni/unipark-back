const express = require('express');
const router = express.Router();
const WebUserController = require('../controllers/Controller_Web_User.js');
const WebQrController = require('../controllers/Controller_Web_CodQr.js');
const WebCarController = require('../controllers/Controller_Web_Car.js');
const WebReportController = require('../controllers/Controller_Web_Report.js');
const AppSyncController = require('../controllers/Controller_App_Sync.js');
//const {getVideoUrl, upload } = require('../controllers/Controller.js'); //funciones de videos

//::::::::::::::::::::::::::: CONTROLLER  WEB ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
router.post('/login', WebUserController.Login);                                 // Valido los intentos de login
router.post('/nuevo/usuario', WebUserController.NewUser);                       // se crea los usuarios
router.post('/actualizar/usuario', WebUserController.UpdateUser);               // se actualiza los usuarios
router.post('/listar/usuario', WebUserController.InfoUser);                     // se muestra informacion de usuarios
router.post('/inactivar/usuario', WebUserController.DeleteUser);                // se eliminan los usuarios
router.post('/ajustes/idioma', WebUserController.UpdateLanguageUser);           // se actualiza el estado del idioma

router.post('/nuevo/vehiculo', WebCarController.NewVehicle);                    // se crea los vehiculos
router.post('/actualizar/vehiculo', WebCarController.UpdateVehicle);            // se actualiza los vehiculos
router.post('/listar/vehiculo', WebCarController.InfoVehicle);                  // se muestra informacion de vehiculos
router.post('/inactivar/vehiculo', WebCarController.DeleteVehicle);             // se eliminan los vehiculos
router.post('/registro/ingreso/vehiculo', WebCarController.IncomeVehicle);      // se registra el ingreso de un vehiculo
router.post('/registro/salida/vehiculo', WebCarController.ExitVehicle);         // se registra la salida de un vehiculo

router.post('/nuevo/qr', WebQrController.NewQR);                                // se crean los códigos QR
router.post('/actualizar/qr', WebQrController.UpdateQR);                        // se actualizan los códigos QR
router.post('/listar/qr', WebQrController.InfoQR);                              // se muestran los códigos QR

router.post('/reporte/motos_total', WebReportController.Report1);               // se muestra el reporte de motos total
router.post('/reporte/carros_total', WebReportController.Report2);              // se muestra el reporte de carros total
router.post('/reporte/bicibletas_total', WebReportController.Report3);          // se muestra el reporte de bicicletas total
router.post('/reporte/ingresos', WebReportController.HistoryIncomeVehicle);     // se muestra el historial de registros por usuario

router.post('/Administrar/usuarios', WebAdminController.ListUsers);             // se muestra los usuarios existente de la plataforma
router.post('/Administrar/vehiculos', WebAdminController.ListVehicles);         // se muestra los usuarios existente de la plataforma

//:::::::::::::::::::::::::::  CONTROLLER APP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
router.post('/aplicacion/sincronizar', AppSyncController.Sync);                // se sincroniza la información de la app









//router.post('/login', userController.Login); // Valido los intentos de login
//router.post('/new_user', userController.NewUser); // creo los registros de los nuevos usuarios
//router.post('/new_admin', userController.NewAdmin); // creo los registros de los nuevos admin
//router.post('/UploadVideo', upload.single('video'), userController.UploadVideo,); // Guardo los videos
//router.post('/GetUserVideo', userController.GetUserVideo); // Obtengo los videos de un usuario
//router.get('/GetAllVideo', userController.GetAllVideos); // Obtengo los videos de un usuario
//router.post('/GetVideo', userController.GetVideo); // Obtengo los videos de un usuario

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//router.post('/Registro_codigo', userController.RegistroCodigo); // creo los registros de los datos de codigo
//router.post('/update_codigo', userController.UpdateCodigo); // creo los registros de los datos de codigo
//router.post('/info_user', userController.InfoUser); // obtener los datos de la vista user
//router.post('/info_user_tabla', userController.InfoTablaUser); // obtener los datos de la vista user
//router.post('/info_audit_users', userController.InfoRegistroLogin); // obtener la fecha de inicio de sesión
//router.post('/info_admin_tabla1', userController.InfoTablaAdmin1); // obtener los datos de tabla de la vista admin 1 milon
//router.post('/info_admin_tabla2', userController.InfoTablaAdmin2); // obtener los datos de tabla de la vista admin 50 mil
//router.post('/info_admin_tabla3', userController.InfoTablaAdmin3); // obtener los datos de tabla de la vista admin 10 mil
//router.post('/info_admin_tabla4', userController.InfoTablaAdmin4); // obtener los datos de tabla de la vista admin no gano


module.exports = router;