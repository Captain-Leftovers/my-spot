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
                <RdxDialog.Overlay className="bg-background-lighter backdrop-blur-sm fixed inset-0" />
                <RdxDialog.Content className='fixed drop-shadow-md border border-neutral-700  top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus-within:outline-none' >
                    <RdxDialog.Title className='text-xl text-center font-bold mb-4' >
                        {title}
                    </RdxDialog.Title>
                    <RdxDialog.Description className='mb-5 text-sm leading-normal text-center' >
                        {description}
                    </RdxDialog.Description>
                    <div>
                        {children}
                    </div>
                    <RdxDialog.Close asChild >
                        <button className='text-text hover:text-text-lighter absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justcenter rounded-full focus:outline-none'>
                            <IoMdClose />
                        </button>
                    </RdxDialog.Close>
                </RdxDialog.Content>
            

            </RdxDialog.Portal>

        </RdxDialog.Root>
    )
} 

export default Modal