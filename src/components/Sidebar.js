import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const SidebarLinks = [
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "Project1",
      to: "/project1",
    },
    {
      title: "About",
      to: "/about",
    },
  ];
  function activeClass(event) {
    const id = Number(event.target.dataset.id);
    setActive(id);
  }
  const [activeSide, setActive] = useState(0);
  return (
    <div className="p-3 border-end " style={{ height: "94vh" }}>
      <div className="list-group">
        {SidebarLinks.map((nameLink, id) => {
          return (
            <Link
              className={`list-group-item list-group-item-action ${
                id === activeSide ? "active" : ""
              } `}
              data-id={id}
              to={nameLink.to}
              key={id}
              onClick={activeClass}
            >
              {nameLink.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
