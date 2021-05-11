// import React from 'react';
// import BurguerText from '../../assets/logoDos.png'

// export const AlertOrder = () => {

//     return (
//     <div className='myAlertClient'>
//         <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
//         <img src={BurguerText} alt='Burguer Queen Text' className='logoText'/>
//         <input id='cliente' className='inputAlert' placeholder='Nombre del cliente'></input>
//         <input id='mesa' className='inputAlert' placeholder='No.de mesa'></input>
//         <button className='confirmButton'>Continuar</button>
//     </div>
//     )
// }
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

 export function ModalPopUp(){
   let subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}
