import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Contents from "./container/contents/contents";
import Sidebar from "./container/side-bar/side-bar";
import TopNav from "./container/top-nav/top-nav";

function App() {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow((prev) => !prev);
  };

  const sidebarRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !menuBtnRef.current.contains(e.target) &&
        !sidebarRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("click");
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        ref={sidebarRef}
        style={{ transform: show ? "translateX(0)" : "" }}
        className="container__left"
      >
        <Sidebar show={show} onClose={() => setShow(false)} />
      </div>
      <div className="container__right">
        {/* <MenuButton menuBtnRef={menuBtnRef} onShow={toggleSidebar} /> */}
        <TopNav />
        <Contents menuBtnRef={menuBtnRef} onShow={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;
