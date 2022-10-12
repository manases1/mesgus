import React from 'react'
import { ChanelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={icon} alt='icon here' width="30" />
            </div>
        </div>
    </div>
)

const ChanelListContainer = () => {
  return (
    <div>ChanelListContainer</div>
  )
}

export default ChanelListContainer