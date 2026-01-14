import React from "react";
import { useParams } from "react-router-dom";
import Inbox from "../Inbox/Inbox";
import Allreports from "../reports/Allreports";
import Settings from "../settings/Settings";
import Home from "../homedash/Home";
import UserProfile from "../../pages/user/UserProfile";
import Teams from "../team/Teams";
import Support from "../support/Support";
import Faq from "../support/support-dropdown/Faq";
import GeneralEnquiry from "../support/support-dropdown/GeneralEnquiry";
import Tickets from "../support/support-dropdown/Tickets";
import { useLocation } from "react-router-dom";

const pageMap = {
  home: <Home />,
  inbox: <Inbox />,
  reports: <Allreports />,
  settings: <Settings />,
  userprofile: <UserProfile />,
  teams: <Teams />,
  faq: <Faq />,
  generalenquiry: <GeneralEnquiry />,
  tickets: <Tickets />,
};

const PageRender = () => {
  const location = useLocation();
  const { name } = useParams();
  const pathname = location.pathname;

  console.log("check location:", location.pathname);

  // console.log("check", name);

  return (
    <>
    {
      (pathname ==  '/admin') ? <Home /> : name ? pageMap[name] : 'Page not found'
    }
    </>
  );
};

export default PageRender;
