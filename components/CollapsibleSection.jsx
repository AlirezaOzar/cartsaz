import React, { useState } from "react";
import Collapsible from "react-collapsible";

const CollapsibleSection = ({ faq }) => {
  const [dataOpen, setDataOpen] = useState({
    dataOpen: { 0: true },
  });
  return (
    <div className="flex justify-center items-center gap-5 flex-col">
      {faq.map((item, index) => {
        return (
          <div
            className="w-full max-w-[800px] cursor-pointer flex flex-col border  px-5 py-4 rounded-lg"
            key={index}
            onClick={() =>
              setDataOpen({...dataOpen, [index]: !dataOpen[index] ,
              })
            }
          >
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rotate-45"></span>
                <p className="text-sm md:text-base max-w-[200px] sm:max-w-full">{item.title}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={`w-6 h-6 ${
                  dataOpen[index] ? "rotate-180" : "rotate-0"
                } transition`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  className="w-7 h-7"
                />
              </svg>
            </div>
            <Collapsible open={dataOpen[index]}>
              <p className="text-sm text-neutral-500 mt-10">{item.body}</p>
            </Collapsible>
          </div>
        );
      })}
    </div>
  );
};

export default CollapsibleSection;
