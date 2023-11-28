import React from 'react'
import CircleIcon from '@mui/icons-material/FiberManualRecord';
import ContactIcon from '../../assets/icon/two-contact.svg'
import SearchIcon from '@mui/icons-material/Search';

import inbox from '../../lib/inbox'

const Chat = ({ openConvo }) => {
    return (
        <>
            <div className="border h-[32px] border-[#828282] rounded-md mt-2">
                <span className='px-16 mt-2 align-middle text-[#333333] tracking-wide'> Search </span>
                <span className='float-right px-10 mt-0 text-[#333333] tracking-wide'> <SearchIcon fontSize='small' /> </span>
            </div>
            {
                inbox.map((items, index) => {
                    return (
                        <div className="flex flex-row justify-between border-b-4 py-6 cursor-pointer" onClick={openConvo} key={index}>
                            <div className="basis-1/6">
                                <img className='' src={ContactIcon} alt='Icon'></img>
                            </div>
                            {items.chat ? (
                                <>
                                    {items.chat.map((chats, index) => (
                                        <div className="basis-4/5" key={index}>
                                            <span className='text-[#2F80ED] font-bold tracking-wide'> {chats.title}</span>
                                            <span className='text-[#4F4F4F] text-sm block font-bold'> {chats.sender} </span>
                                            <span className='text-[#4F4F4F] text-sm block'> {chats.message} </span>
                                        </div>
                                    ))}
                                </>
                            ) : ''
                            }
                            <div className="basis-2/6 text-[#4F4F4F] tracking-wide"> {items.date} </div>
                            <div className="basis-3 py-6">
                                {items.status === true ? '' : <CircleIcon className='float-right' fontSize='small' style={{ color: '#ff0000' }} />}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Chat