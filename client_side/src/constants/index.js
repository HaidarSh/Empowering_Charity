import {
  active_state,
  inactive_state,
  home_buttom,
  add_charity,
} from "../assets";

export const navlinks = [
  {
    name: "home",
    imgUrl: home_buttom,
    link: "/Empowering_Charity/",
  },
  {
    name: "create-charity",
    imgUrl: add_charity,
    link: "/Empowering_Charity/Create_Charity",
  },
  {
    name: "active-state",
    imgUrl: active_state,
    link: "/Empowering_Charity/View_Active_Charity",
  },
  {
    name: "inactive-state",
    imgUrl: inactive_state,
    link: "/Empowering_Charity/View_InActive_Charity",
  },
  {
    name: "profile",
    imgUrl: "",
    link: "/Empowering_Charity/Profile",
  },
];
