const pool = require('../database/connect_mongo.js')
const { ObjectId } = require('mongodb');

//------------- metodo  para registrar usuarios --------------------- TERMINDO, validado
const NewUser = async (req, res) => {

  const datos = req.body;
  console.log("DATOS enviados: ", datos);

  const PasswordEncrypt = CryptoJS.SHA256(datos.password, process.env.CODE_SECRET_DATA).toString();
  //console.log("PASS Encryp: ", PasswordEncrypt);
  const Role = "User";
  
  try{ 

    //valido que los datos envidos no existan en la BD
    const ValidaUser = await pool.db('Unipark').collection('usuarios').findOne({user: datos.correo, rol: Role });
    if(!ValidaUser){

      // Registro el user
      const registroUser =  await pool.db('Unipark').collection('usuarios').insertOne({user: datos.correo, password: PasswordEncrypt, rol: Role });
      console.log("se creo el usuario exitosamente: ");

      if (registroUser.acknowledged) {
        //console.log("status: Registro de usuario exitoso.")
        //Consulto el id del usuario ya creado
        const DatosUser = await pool.db('Unipark').collection('usuarios').findOne({user: datos.correo, password: PasswordEncrypt });
        if (DatosUser) {
          //console.log("DATOS DEL USUARIO: ", DatosUser)
          // Regsitro los datos del usuario en user_info
          const IDUSER = DatosUser._id;
          const registroUserInfo =  await pool.db('Unipark').collection('user_info').insertOne({user_id: IDUSER, nombre: datos.nombre, fecha_nacimiento: datos.fechaN, cedula: datos.cedula, celular: datos.celular, ciudad: datos.ciudad});
          if (registroUserInfo.acknowledged) {
            console.log("se Guardo la info del usuario exitosamente: ");
            res.json({ status: "Se creo el usuario exitosamente." });
            //res.send("Se creo el usuario exitosamente.");
          }
          else{
            console.log("No se Guardo la info del usuario: ");
            res.send("Ha ocurrido un error, no se guardo la información.");
          }

        }else{
          res.send("Usuario no existe!");
          console.log("No existe el usuario ingresado")
        }
      
      } else {
        res.json({ status: "Error Creando Registro" });
        console.log("status: Error Creando Registro")
      }

    }else{
      res.json({ status: "El usuario ya existe en el sistema, por favor ingresa un correo diferente."});
      console.log("El usuario ya existe en el sistema:");
    }

  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ status: "Error", message: "Ha ocurrido un error con la BD." });
  }
};
