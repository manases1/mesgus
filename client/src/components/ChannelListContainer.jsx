import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '.'
import HomeIcon from '../MyAssets/home.png'
import LogoutIcon from '../MyAssets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HomeIcon} alt='home icon here' width="30" />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon2__inner'>
                <img src={LogoutIcon} alt='log out icon here' width="30" />
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Mesgus</p>
    </div>
)

const ChannelListContainer = () => {
  return (
    <div>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                    {...previewProps}
                    type="team" />
                )}
            />
        </div>
    </div>
  )
}

export default ChannelListContainer