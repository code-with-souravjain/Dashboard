import React from 'react'
import { useParams } from 'react-router-dom'
import Inbox from '../Inbox/Inbox'
import Allreports from '../reports/Allreports'
import Settings from '../settings/Settings'
import HomeDash from '../homedash/HomeDash'
import UserProfile from '../../user/UserProfile'

const pageMap = {
  homedash: <HomeDash />,
  inbox: <Inbox />,
  reports: <Allreports />,
  settings: <Settings />,
  userprofile: <UserProfile/>
}

const PageRender = () => {
  const { name } = useParams()

  return pageMap[name] || <div>Page not found</div>
}

export default PageRender
