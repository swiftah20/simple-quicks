import React, { useState, useReducer } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import Chat from '../view/chats/Chat';

import Conversation from '../view/chats/Conversation';

const Popup = ({ isChatOpen, loading }) => {

    const [isConvoOpen, setIsConvoOpen] = useState(false)

    const openConvo = () => {
        setIsConvoOpen(!isConvoOpen)
    }

    return (
        <>
            <div className="fixed bottom-0 right-0">
                {
                    isChatOpen === true &&
                    <div className="fixed bottom-[100px] right-6 max-w-[732px] min-w-[732px] h-[734px] 
                                    bg-white border border-gray-300 rounded-lg shadow-md overflow-auto">
                        <>
                            {
                                !loading ? (
                                    <>
                                        {
                                            isConvoOpen ? <Conversation /> :
                                                <div className='mx-8 p-4'>
                                                    <Chat openConvo={openConvo} />
                                                </div>
                                        }
                                    </>
                                ) :
                                    <div className='absolute top-[50%] left-[45%]'>
                                        <MoonLoader
                                            loading={loading}
                                            size={50}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                        <span> Loading Chats.. </span>
                                    </div>
                            }
                        </>
                    </div>
                }
            </div>
        </>
    )
}

export default Popup