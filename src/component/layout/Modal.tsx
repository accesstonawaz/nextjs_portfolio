'use client'

import Contact from "@/static/Contact";
import Close from "../menu/elements/Close";
import { useGlobalState } from "@/contexts/GlobalStateContext";

function Modal () {

    const { isModalOpen, exitModal } = useGlobalState();

    return (<>
        {isModalOpen ? <>
            <div className="fixed top-0 right-0 p-2 z-[101]" onClick={exitModal}><Close /></div> 
            <div className="fixed textColor #fa8a28 text-4x  bg-black backdrop-blur-md bg-opacity-40 w-full h-screen min-h-screen z-[100]">
            <Contact />
            </div></> : <></>}
        </>)
}

export default Modal;