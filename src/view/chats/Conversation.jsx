import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import OptionIcon from '@mui/icons-material/MoreHoriz';

const Conversation = () => {
    return (
        <>
            <div className="flex flex-row p-4 border-b-2 bg-white sticky top-0">
                <div className="basis-1/12 text-center align-middle pt-2">
                    <ArrowBackIcon />
                </div>
                <div className="basis-5/6 pl-2">
                    <span className='text-[#2F80ED] font-bold tracking-wide'> I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN] </span>
                    <span className='text-[#4F4F4F] text-sm block'> 3 Participants </span>
                </div>
                <div className="basis-1/12 text-center mt-1">
                    <CloseIcon />
                </div>
            </div>
            <div className='mx-4 mb-1 p-4'>
                <div className="flex flex-row-reverse">
                    <div className="basis-3/4">
                        <div className='grid grid-row-3'>
                            <span className='grid justify-items-end text-[#9B51E0] font-bold tracking-wide mb-1'> You </span>
                            <div className='bg-[#EEDCFF] rounded-md p-3'>
                                <p className='text-[#4F4F4F] tracking wide mb-2'> No worries. It will be completed ASAP. I’ve asked him yesterday. </p>
                                <span className='text-[#4F4F4F]'> 19:32 </span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4 grid justify-items-end px-2 py-6">
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mx-8'>
                <div className='border-b-2 top-[50%]'> </div>
                <div className='text-[#4F4F4F] text-lg tracking-wide font-bold text-center'> Today June 09, 2021 </div>
                <div className='border-b-2'> </div>
            </div>
            <div className='mx-4 mb-1 p-4'>
                <div className="flex flex-row">
                    <div className="basis-auto">
                        <div className='grid grid-row-3'>
                            <span className='grid justify-items-start text-[#E5A443] font-bold tracking-wide mb-1'> Mary Hilda </span>
                            <div className='bg-[#FCEED3] rounded-md p-3'>
                                <p className='text-[#4F4F4F] tracking-wide mb-2 leading-normal'> Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks. </p>
                                <span className='text-[#4F4F4F]'> 19:32 </span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/6 grid justify-items-start px-2 py-6">
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className='mx-4 mb-1 p-4'>
                <div className="flex flex-row-reverse">
                    <div className="basis-auto">
                        <div className='grid grid-row-3'>
                            <span className='grid justify-items-end text-[#9B51E0] font-bold tracking-wide mb-1'> You </span>
                            <div className='bg-[#EEDCFF] rounded-md p-3'>
                                <p className='text-[#4F4F4F] tracking wide mb-2'> Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary. </p>
                                <span className='text-[#4F4F4F]'> 19:32 </span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4 grid justify-items-end px-2 py-6">
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className='mx-4 mb-1 p-4'>
                <div className="flex flex-row">
                    <div className="basis-auto">
                        <div className='grid grid-row-3'>
                            <span className='grid justify-items-start text-[#E5A443] font-bold tracking-wide mb-1'> Mary Hilda </span>
                            <div className='bg-[#FCEED3] rounded-md p-3'>
                                <p className='text-[#4F4F4F] tracking-wide mb-2 leading-normal'> Sure thing, Claren. </p>
                                <span className='text-[#4F4F4F]'> 19:32 </span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/6 grid justify-items-start px-2 py-6">
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mx-8 mb-4'>
                <div className='border-b-2 border-[#EB5757] top-[50%]'> </div>
                <div className='text-[#EB5757] text-lg tracking-wide font-bold text-center'> New Message </div>
                <div className='border-b-2 border-[#EB5757]'> </div>
            </div>
            <div className='mx-4 mb-1 p-4'>
                <div className="flex flex-row">
                    <div className="basis-auto">
                        <div className='grid grid-row-3'>
                            <span className='grid justify-items-start text-[#43B78D] font-bold tracking-wide mb-1'> Obaidullah Amarkhil </span>
                            <div className='bg-[#D2F2EA] rounded-md p-3'>
                                <p className='text-[#4F4F4F] tracking-wide mb-2 leading-normal'> Morning. I’ll try to do them. Thanks </p>
                                <span className='text-[#4F4F4F]'> 19:32 </span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/6 grid justify-items-start px-2 py-6">
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className='px-8 py-4 sticky bottom-0 bg-white'>
                <div className='flex flex-row gap-4'>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="basis-4/5 px-2 py-2 border-2 rounded-md text-md"
                        placeholder="Type a new message "
                    />
                    <div className='basis-1/5'>
                        <button className='w-full h-full rounded-md mx-auto bg-[#2F80ED] text-white tracking-wide'> Send </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation