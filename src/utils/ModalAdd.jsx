import './ModalAdd.css'
import { useState , useContext } from 'react';
import { AllContext } from '../Contexto';

function ModalAdd({ modalView , setModalView }) {
    
    //Variable para cargar los datos del contexto 
    const { refresh , setRefresh } = useContext(AllContext);

    //Variable para almacenar los datos a agregar
    const [email,SetEmail] = useState('');
    const [lname,SetLname] = useState('');
    const [fname,SetFname] = useState('');
    const [grade,SetGrade] = useState('');

    //Funcion encargada de realizar una peticion a la BD para agregar usuarios
    const sendData = async () => {
        try {
            await fetch('http://localhost:3001/adduser', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
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
    <div className='modalAdd'>
        <div className='contModalAdd'>
            <h2>
                !! Agregar Ususario !!
            </h2>
            <div className='contAllInputs'>
                <label>
                    Nombre:
                    <input type="text" value={fname} onChange={(text)=>SetFname(text.target.value)}/>
                </label>
                <label>
                    Apellido:
                    <input type="text" value={lname} onChange={(text)=>SetLname(text.target.value)}/>
                </label>
                <label>
                    Correo: 
                    <input type="text" value={email} onChange={(text)=>SetEmail(text.target.value)}/>
                </label>
                <label>
                    Grado:
                    <input type="text" value={grade} onChange={(text)=>SetGrade(text.target.value)}/>
                </label>
            </div>
            <div className='contALlButts'>
                <button onClick={()=>{sendData();setRefresh(!refresh);setModalView(!modalView)}}>
                    <img src='public/acuerdo.png' />
                </button>
                <button onClick={()=>setModalView(!modalView)}>
                    <img src='public/cancelar.png' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalAdd