import React from 'react'
import ActionButton from '../components/ActionButton'
import Popup from '../components/Popup'

const Home = () => {

    return (
        <>
            <div className="flex flex-row h-screen bg-[#333333]">
                <div className="basis-1/6 border-r-2 border-gray-400"></div>
                <div className="basis-3/4 fixed bottom-5 right-5">
                    <ActionButton />
                    <Popup />
                </div>
            </div>
        </>
    )
}

export default Home