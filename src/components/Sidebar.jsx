import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-4 py-6 max-sm:hidden">
      <div>
        <img
          src={assets.menu_icon}
          className="block cursor-pointer ml-2 w-5"
          alt=""
          onClick={() => setShow(prev => !prev)}
        />
        <div className="mt-12 inline-flex items-center gap-2 px-4 py-3 bg-[#e6eaf1] rounded-full text-sm text-gray-400 cursor-pointer" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" className="w-5"/>
          {show ? <p>New Chat</p> : null}
        </div>
        {show ? <div className="flex flex-col">
             <p className="mt-7 mb-5">Recent</p>
             {prevPrompts.map((item, index) => {
              return (
                <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]" onClick={() => loadPrompt(item)}>
                <img src={assets.message_icon} alt="" className="w-5" />
                <p>{item.slice(0,18)}...</p>
              </div>
              )
             })}
            
          </div>
         : null}
      </div>
      <div className="flex flex-col">
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.question_icon} alt="" className="w-5" />
          { show ? <p>Help</p> : null}
        </div>
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.history_icon} alt="" className="w-5" />
          {show ? <p>Activity</p> : null}
        </div>
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.setting_icon} alt="" className="w-5"/>
          {show ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
