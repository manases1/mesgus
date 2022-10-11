import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'; //found all of this on google I'm using something called stream which is a website that provides the API for the chats to work

import { ChanelListContainer, ChanelContainer } from './components'

const apiKey = 'snsury5jqz56'

const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app__wrapper">
            <Chat>
                <ChanelListContainer

                />
                <ChanelContainer

                />
            </Chat>
        </div>
    )
}

export default App;