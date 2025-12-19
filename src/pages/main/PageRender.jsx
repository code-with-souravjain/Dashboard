import React from 'react'
import { useParams } from 'react-router-dom'
import Inbox from '../Inbox/Inbox'
import Allreports from '../reports/Allreports'
import Settings from '../settings/Settings'
import Home from '../homedash/Home'
import UserProfile from '../../pages/user/UserProfile'
import Demopage from "../../pages/demo/Demopage"

const pageMap = {
  home: <Home />,
  inbox: <Inbox />,
  reports: <Allreports />,
  settings: <Settings />,
  userprofile: <UserProfile/>,
  demopage: <Demopage/>
}

const PageRender = () => {
  const { name } = useParams()

  return pageMap[name] || <div>Page not found</div>
}

export default PageRender
