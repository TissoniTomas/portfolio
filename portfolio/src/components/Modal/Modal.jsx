
import { useEffect, useState } from 'react'
import { Check } from 'phosphor-react'
import { Button, Modal, Typography } from 'keep-react'




export const ModalCertificados = ({certificado, carrera}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [button, setButton] = useState("")

 useEffect(()=>{
    console.log(certificado);
    
   if(carrera){
    setButton("Ver Certificado de Carrera")
   }else{
    setButton("Ver Certificado")
   }
 },[certificado])
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
    
      <Button onClick={openModal} className='hover:bg-cyan-500'>{button}</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex flex-col items-center w-screen">
          
         <img className='h-auto lg:h-screen' src={certificado} alt="" />
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" color="success">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}
