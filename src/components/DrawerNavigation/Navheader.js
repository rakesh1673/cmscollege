import React, { useState } from "react";
import DrawerCompo from "./Drawer";
import ToolbarCompo from "./ToolbarCompo";
const NavHeader = () => {
  const [left, setleft] = useState(false);

  const toggleDrawer = () => {
    setleft(false);
  };

  const openDrawer = () => {
    setleft(true);
  };

  return (
    <div style={{marginTop:'5%'}}>
      <ToolbarCompo openDrawerHandler={openDrawer} />
      <DrawerCompo left={left} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default NavHeader;
