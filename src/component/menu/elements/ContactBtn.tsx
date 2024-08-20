'use client'

import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

const ContactBtn = ({title}:{title:string}) => {
    
    const { isModalOpen, toggleModal, exitMenu } = useGlobalState();

    const handleClick = () => {
        exitMenu();
        toggleModal();
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isModalOpen]);
    
    return (<button className='flex items-center cursor-pointer'>
        <div aria-label={title} className={"transition ease-in-out duration-300 text-center border-2 border-white rounded-full text-[40px] px-4 py-2 hover:bg-orange-400 hover:text-black hover:border-blue-400"} onClick={handleClick} >{title}</div>
        </button>
    );
}

export default ContactBtn;