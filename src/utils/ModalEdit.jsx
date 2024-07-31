import './ModalEdit.css'
import { useState , useContext} from 'react';
import { AllContext } from '../Contexto';

function ModalEdit({ index , setModalView , dataUser }) {

    //Variable para cargar los datos del contexto 
    const { refresh , setRefresh } = useContext(AllContext);

    const [lname,SetLname] = useState('');
    const [fname,SetFname] = useState('');
    const [grade,SetGrade] = useState('');


    const editteData = async () => {
        try {
            await fetch('http://localhost:3001/edituser', {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:dataUser[index].email,
                lname:lname,
                fname:fname,
                grade:grade
            }),
        });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
    <div className='modalEdit'>
        <div className='contModalEdit'>
            <h2>
                !! Editar Ususario !!
            </h2>
            <p>Para evitar errores repita los campos que no desea modificar</p>
            <div className='contAllInputs'>
                <p>Correo: {dataUser[index].email}</p>
                <label>
                    Nombre:
                    <input type="text" placeholder={dataUser[index].fname} value={fname} onChange={(text)=>SetFname(text.target.value)}/>
                </label>
                <label>
                    Apellido:
                    <input type="text" placeholder={dataUser[index].lname} value={lname} onChange={(text)=>SetLname(text.target.value)}/>
                </label>
                <label>
                    Grado:
                    <input type="text" placeholder={dataUser[index].grade} value={grade} onChange={(text)=>SetGrade(text.target.value)}/>
                </label>
            </div>
            <div className='contALlButts'>
                <button onClick={()=>{editteData();setRefresh(!refresh);setModalView(false)}}>
                    <img src='public/acuerdo.png' />
                </button>
                <button onClick={()=>setModalView(false)}>
                    <img src='public/cancelar.png' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalEdit