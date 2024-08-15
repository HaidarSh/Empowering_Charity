import {
  active_state,
  inactive_state,
  profile_active,
  home_buttom,
  add_charity,
} from "../assets";

export const navlinks = [
  {
    name: "home",
    imgUrl: home_buttom,
    link: "/",
  },
  {
    name: "create-charity",
    imgUrl: add_charity,
    link: "/Create_Campaign",
  },
  {
    name: "active-state",
    imgUrl: active_state,
    link: "/ViewActiveCharity",
  },
  {
    name: "inactive-state",
    imgUrl: inactive_state,
    link: "/ViewInActiveCharity",
  },
  {
    name: "profile",
    imgUrl: profile_active,
    link: "/profile",
  },
];
