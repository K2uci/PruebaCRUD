import './App.scss';
import { AllContext } from './Contexto';
import { useContext, useState } from 'react';
import ModalDel from './utils/ModalDel';
import ModalAdd from './utils/ModalAdd';
import ModalEdit from './utils/ModalEdit';


function App() {
  //Variable para controlar la seccion de usuario
  const [selection,setSelection] = useState(null)

  //Variable para cargar los datos del contexto 
  const { dataUser } = useContext(AllContext)

  //Variables para abrir os modales
  const [modalViewAdd,setModalViewAdd] = useState(false);
  const [modalViewDel,setModalViewDel] = useState(false);
  const [modalViewEdit,setModalViewEdit] = useState(false);

  return (
    
    <div className='contAll'>
      {modalViewAdd ? <ModalAdd modalView={modalViewAdd}  setModalView={setModalViewAdd}/>:null}
      {modalViewDel ? <ModalDel dataUser={dataUser} index={selection} modalView={modalViewDel}  setModalView={setModalViewDel}/>:null}
      {modalViewEdit ? <ModalEdit dataUser={dataUser} index={selection} setModalView={setModalViewEdit}/>:null}

      <header>
        <h1>
          Gestion de Empleados
        </h1>
        <div className='header__contButs'>
          <button className='butDel' onClick={()=>setModalViewAdd(true)}>
          <img src='public/adduser.png' />
            Agregar
          </button>
        </div>
      </header>
      <main>
        <div className='main__header'>
          <p>Nombre</p>
          <p>Apellido</p>
          <p>Grado</p>
          <p>Correo</p>
          <p>Accion</p>
        </div>
        {dataUser.map((user,index) => (
          <div className='main__element' key={index}>
              <p>{user.fname}</p>
              <p>{user.lname}</p>
              <p>{user.grade}</p>
              <p>{user.email}</p>
              <div className='element__contButts'>
                <button onClick={()=>{setSelection(index);setModalViewEdit(true)}}>
                  <img src='public/edit.png'/>
                </button>
                <button onClick={()=>{setSelection(index);setModalViewDel(true)}}>
                  <img src='public/delete.png'/>
                </button>
              </div>
            </div>
        ))}
      </main>
      <footer>
        <p>Contamos con {dataUser.length} usuarios</p>
      </footer>
    </div>
  )
}

export default App
