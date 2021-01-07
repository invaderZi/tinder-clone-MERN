import React from 'react'
import './SwipeButtons.css'
import { IconButton } from '@material-ui/core';


import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRating from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className='swipedButtons' >
            <IconButton className='repeat_button'>
                <ReplayIcon fontSize='large'/>
            </IconButton>

            <IconButton className='dislikeButton'>
                <CloseIcon fontSize='large'/>
            </IconButton>

            <IconButton className='starButton'>
                <StarRating fontSize='large'/>
            </IconButton>

            <IconButton className='likeButton'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>

            <IconButton className='flashButton'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>

            
        </div>
    )
}

export default SwipeButtons;
