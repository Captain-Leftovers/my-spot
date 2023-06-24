import * as RdxDialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'


type ModalProps = { 
    isOpen: boolean
    onChange: ( open: boolean) => void
    title: string
    description: string
    children: React.ReactNode
}

const Modal = ( { isOpen, children, description, onChange, title } : ModalProps ) => {


    
    return (
        <RdxDialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}  >

            <RdxDialog.Portal>
                <RdxDialog.Overlay className="bg-background-lighter/40 backdrop-blur-sm fixed inset-0" />
            

            </RdxDialog.Portal>

        </RdxDialog.Root>
    )
} 

export default Modal