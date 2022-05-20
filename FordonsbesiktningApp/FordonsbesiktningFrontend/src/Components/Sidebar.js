import React from "react";

function Sidebar() {
  return (
    <div class="sidebar">
      <SidebarButton number="1" text="Stomme" />
      <SidebarButton number="2" text="Miljökontroll" />
    </div>
  );
}

function SidebarButton({ number, text }) {
  return (
    <div class="sidebar-button">
      <p class="sidebar-button-text">
        <sup class="sidebar-button-number">{number}</sup>
        {text}
      </p>
    </div>
  );
}

export default Sidebar;
