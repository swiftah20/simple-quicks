import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ReaderIcon from '@mui/icons-material/ChromeReaderMode';
import QuestionIcon from '@mui/icons-material/QuestionAnswerOutlined';
import LightningIcon from '@mui/icons-material/ElectricBoltRounded';
import Popup from './Popup';

const ActionButton = () => {
    const [showAction, setShowAction] = useState({ isHidden: true });
    const [btnReaderActive, setBtnReaderActive] = useState(false)
    const [btnQuestionActive, setBtnQuestionActive] = useState(false)

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    function toggleAction() {
        setShowAction({ isHidden: !showAction.isHidden });
    }

    const style = { visibility: showAction.isHidden ? 'hidden' : 'visible' };
    const readerActive = () => {
        setBtnReaderActive(current => !current);
    }

    const questionActive = () => {
        setBtnQuestionActive(current => !current);
        setIsChatOpen(!isChatOpen);
        setLoading(setTimeout(() => {
            setLoading(false)
          }, 1700))
    }

    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab
                    style={{
                        ...style,
                        color: btnReaderActive ? '#ffffff' : '#F8B76B',
                        backgroundColor: btnReaderActive ? '#F8B76B' : '#ffffff',
                        position: btnReaderActive ? 'fixed' : '',
                        right: btnReaderActive ? '10px' : ''
                    }}
                    disabled={btnQuestionActive ? true : false}
                    onClick={readerActive}
                >
                    <ReaderIcon />
                </Fab>
                <Fab
                    style={{
                        ...style, ...{
                            color: btnQuestionActive ? '#ffffff' : '#8785FF',
                            backgroundColor: btnQuestionActive ? '#8785FF' : '#ffffff',
                            position: btnQuestionActive ? 'fixed' : '',
                            right: btnQuestionActive ? '10px' : ''
                        }
                    }}
                    disabled={btnReaderActive ? true : false}
                    onClick={questionActive}
                >
                    <QuestionIcon />
                </Fab>
                <Fab
                    color="primary"
                    aria-label="add"
                    disabled={btnReaderActive || btnQuestionActive ? true : false}
                    onClick={toggleAction}
                >
                    <LightningIcon />
                </Fab>
            </Box>
            <Popup isChatOpen={isChatOpen} loading={loading} />
        </>
    )
}

export default ActionButton