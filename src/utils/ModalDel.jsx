import './ModalDel.css'
import { useContext } from 'react';
import { AllContext } from '../Contexto';

function ModalDel({ dataUser , index , modalView , setModalView }) {

  //Variable para cargar los datos del contexto 
  const { refresh , setRefresh } = useContext(AllContext);

  //Funcion encargada de hacer una peticion a la BD para eliminar un usuario segun por el email
  const deleteData = async () => {
    try {
        await fetch('http://localhost:3001/deleteuser', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:dataUser[index].email})
    });
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <div className='modalDel'>
        <div className='contModalDel'>
            <p>
                Estas seguro que deseas eliminar al usuario <span style={{color:'red'}}>!! {dataUser[index].fname} !!</span> 
            </p>
            <div className='contButts'>
            
                <button onClick={()=>{deleteData();setRefresh(!refresh);setModalView(!modalView)}}>
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

export default ModalDel