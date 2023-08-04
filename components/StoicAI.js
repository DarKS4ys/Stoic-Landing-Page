  "use client"

import { useState } from "react";
import axios from "axios";
import { BsStars } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";

const endpoint = "https://www.stack-inference.com/run_deployed_flow?flow_id=64c7d73da8f57e2c44512cba&org=6b6cae8f-e4e9-4484-a46d-e179668f1616";
const apiKey = "df170389-072f-486c-a2b2-41dd46b4451c";

export default function StoicAI() {
  const [inputText, setInputText] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputText.trim() === "") return;

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const data = {
      "in-0": inputText,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(endpoint, data, { headers });
      setApiResponse(response.data["out-0"]);
    } catch (error) {
      console.error("stack-error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center p-5 w-full md:w-[500px]">
        <div className="bg-[#1a1a1a] flex justify-center items-center w-full py-4 px-6 rounded-full gap-2">
            <BsStars className="text-[#7c7c7c]" />
            <input
            placeholder="Ask me anything"
            className="text-black bg-transparent outline-none w-full placeholder:text-[#7c7c7c]"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            />
            <button onClick={handleSubmit}>
            <IoSendSharp className="text-[#7c7c7c]" />
            </button>
        </div>

        {isLoading ? (
            <div className="bg-[var(--text)] rounded-xl py-3 px-4 w-full">
            <div className="flex items-center justify-center">
                <div className="text-white animate-bounce mx-1">.</div>
                <div className="text-white animate-bounce mx-1">.</div>
                <div className="text-white animate-bounce mx-1">.</div>
            </div>
            </div>
        ) : (
            <div
            className={`${
                apiResponse ? "bg-[var(--text)] w-full text-white" : "hidden"
            } rounded-xl py-3 px-4 w-[430px]`}
            >
            <h1>{apiResponse}</h1>
            </div>
        )}
    </div>
  );
}
