import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Main = () => {
  const {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="flex-1 h-screen pt-4 relative">
      <div className="flex items-center justify-between text-xl p-5 text-[#585858]">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      <div className="max-w-4xl m-auto">
        {!showResult ? (
          <>
            <div className="mx-12 my-0 text-5xl text-[#c4c7c5] font-medium p-5 mb-5">
              <p>
                <span className="greet">Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="h-50 p-4 rounded-xl relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-1 right-1"
                />
              </div>
              <div className="h-50 p-4 rounded-xl relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Briefly summarize this concept: Urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-1 right-1"
                />
              </div>
              <div className="h-50 p-4 rounded-xl relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-1 right-1"
                />
              </div>
              <div className="h-50 p-4 rounded-xl relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Improve the readability of the following code
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-1 right-1"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result px-0 py-2 max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-0 flex items-center gap-5">
              <img src={assets.user_icon} className="w-10 rounded-full" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
                <img src={assets.gemini_icon} className="w-10 rounded-full" alt="" />
                {loading ? (<div className="loader flex w-full flex-col gap-3">
                        <hr />
                        <hr />
                        <hr />
                </div>) : (<p dangerouslySetInnerHTML={{__html:resultData}} className="text-lg"></p>)}
                
            </div>
          </div>
        )}

        <div className="absolute sm:bottom-0 w-full max-w-4xl px-0 py-5 m-auto">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] px-3 py-5 rounded-full max-sm:px-1.5 max-sm:py-2.5">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini"
              className="flex-1 p-2 text-xl border-none outline-none max-sm:flex-none max-sm:w-38"
            />
            <div className="flex items-center gap-4 max-sm:gap-5">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-6 cursor-pointer max-sm:w-5"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="w-6 cursor-pointer max-sm:w-5"
              />
              {input ? <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt=""
                className="w-6 cursor-pointer max-sm:w-5"
              /> : null}
            </div>
          </div>
          <p className="text-sm mx-4 my-auto text-center font-normal text-[#585858]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
