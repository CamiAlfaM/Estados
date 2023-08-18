import Socialbutton from "./Socialbutton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({alert, setAlert}) => {
    return(
        <>
        
        <h1>Crea una cuenta</h1>
        <div className="icon">
        <Socialbutton icon="fa-brands fa-facebook"/>
        <Socialbutton icon="fa-solid fa-envelope" />
        <Socialbutton icon="fa-brands fa-linkedin" />
        </div>
        <p>O regístrate aquí</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert msg={alert.msg} color= {alert.color}  />}
        
        </>
    );
}

export default Registro;