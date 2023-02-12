import { SignForm } from '../Components'
import Modal from 'react-modal';
import {AiOutlineClose} from "react-icons/ai"
const SignModal = ({ type, modalIsOpen, setIsOpen })=>{
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: "none",
      backgroundColor:"transparent"
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="signin first"
 
  >
    <div className="p-4 bg-gray-200  rounded-lg">
      <AiOutlineClose onClick={closeModal} className="cursor-pointer"/>
      <h2 className=" text-xl font-semibold">
        برجاء تسجيل الدخول أولا لتسجيل نفسك في قائمة {type}
      </h2>
      <SignForm signUp={false} isModal={true} />
    </div>
  </Modal>
}

export default SignModal;