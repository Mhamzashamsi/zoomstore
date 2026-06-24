
// import React, { useContext } from "react";
// import ai from "../assets/Ai.png";
// import { shopdatacontext } from "../Context/shopcontext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Ai() {
//   const { showSearch, setShowSearch } = useContext(shopdatacontext);
//   const navigate = useNavigate();

//   const speak = (message) => {
//     const utterance = new SpeechSynthesisUtterance(message);
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       toast.error("Speech Recognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();

//     recognition.lang = "en-US";
//     recognition.start();

//     recognition.onresult = (e) => {
//       const transcript = e.results[0][0].transcript
//         .toLowerCase()
//         .trim();

//       console.log("Voice Command:", transcript);

//       // Open Search
//       if (
//         transcript.includes("open search") &&
//         !showSearch
//       ) {
//         speak("Opening search");
//         setShowSearch(true);
//         navigate("/collection");
//       }

//       // Close Search
//       else if (
//         transcript.includes("close search") &&
//         showSearch
//       ) {
//         speak("Closing search");
//         setShowSearch(false);
//       }

//       // Collection Page
//       else if (
//         transcript.includes("collection") ||
//         transcript.includes("collections") ||
//         transcript.includes("product") ||
//         transcript.includes("products")
//       ) {
//         speak("Opening collection page");
//         navigate("/collections");
//       }

//       // About Page
//       else if (
//         transcript.includes("about") ||
//         transcript.includes("about page")
//       ) {
//         speak("Opening about page");
//         navigate("/about");
//         setShowSearch(false);
//       }

//       // Home Page
//       else if (
//         transcript.includes("home") ||
//         transcript.includes("home page")
//       ) {
//         speak("Opening home page");
//         navigate("/");
//         setShowSearch(false);
//       }

//       // Cart Page
//       else if (
//         transcript.includes("cart") ||
//         transcript.includes("shopping cart")
//       ) {
//         speak("Opening cart page");
//         navigate("/cart");
//         setShowSearch(false);
//       }

//       // Orders Page
//       else if (
//         transcript.includes("orders") ||
//         transcript.includes("order history")
//       ) {
//         speak("Opening orders page");
//         navigate("/order");
//         setShowSearch(false);
//       }

//       // Contact Page
//       else if (
//         transcript.includes("contact") ||
//         transcript.includes("contact us")
//       ) {
//         speak("Opening contact page");
//         navigate("/contact");
//         setShowSearch(false);
//       }

//       // Unknown Command
//       else {
//         toast.error("Command not recognized");
//         speak("Command not recognized");
//       }
//     };

//     recognition.onerror = (error) => {
//       console.log(error);
//       toast.error("Voice Recognition Error");
//     };
//   };

//  return (
//     <div
//       className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%] z-50"
//       onClick={startListening}
//     >
//       <img
//         src={ai}
//         alt="AI Assistant"
//         className={`w-[100px] cursor-pointer ${
//           activeAi
//             ? "translate-x-[10%] translate-y-[10%] scale-125"
//             : "translate-x-0 translate-y-0 scale-100"
//         } transition-transform duration-300`}
//         style={{
//           filter: activeAi
//             ? "drop-shadow(0px 0px 30px #00d2fc)"
//             : "drop-shadow(0px 0px 20px black)",
//         }}
//       />
//     </div>
//   );
// }


// }

// export default Ai;

import React, { useContext, useState } from "react";
import ai from "../assets/Ai.png";
import { shopdatacontext } from "../Context/shopcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Ai() {
  const { showSearch, setShowSearch } = useContext(shopdatacontext);
  const navigate = useNavigate();
  const [activeAi, setActiveAi] = useState(false);

  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    setActiveAi(true);

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase().trim();

      console.log("Voice Command:", transcript);

      if (transcript.includes("open search") && !showSearch) {
        speak("Opening search");
        setShowSearch(true);
        navigate("/collections");
      } else if (transcript.includes("close search") && showSearch) {
        speak("Closing search");
        setShowSearch(false);
      } else if (
        transcript.includes("collection") ||
        transcript.includes("collections") ||
        transcript.includes("product") ||
        transcript.includes("products")
      ) {
        speak("Opening collection page");
        navigate("/collections");
      } else if (
        transcript.includes("about") ||
        transcript.includes("about page")
      ) {
        speak("Opening about page");
        navigate("/about");
        setShowSearch(false);
      } else if (
        transcript.includes("home") ||
        transcript.includes("home page")
      ) {
        speak("Opening home page");
        navigate("/");
        setShowSearch(false);
      } else if (
        transcript.includes("cart") ||
        transcript.includes("shopping cart")
      ) {
        speak("Opening cart page");
        navigate("/cart");
        setShowSearch(false);
      } else if (
        transcript.includes("orders") ||
        transcript.includes("order history")
      ) {
        speak("Opening orders page");
        navigate("/order");
        setShowSearch(false);
      } else if (
        transcript.includes("contact") ||
        transcript.includes("contact us")
      ) {
        speak("Opening contact page");
        navigate("/contact");
        setShowSearch(false);
      } else {
        toast.error("Command not recognized");
        speak("Command not recognized");
      }

      setActiveAi(false);
    };

    recognition.onerror = (error) => {
      console.log(error);
      toast.error("Voice Recognition Error");
      setActiveAi(false);
    };
  };

  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%] z-50"
      onClick={startListening}
    >
      <img
        src={ai}
        alt="AI Assistant"
        className={`w-[100px] cursor-pointer ${
          activeAi
            ? "translate-x-[10%] translate-y-[10%] scale-125"
            : "translate-x-0 translate-y-0 scale-100"
        } transition-transform duration-300`}
        style={{
          filter: activeAi
            ? "drop-shadow(0px 0px 30px #00d2fc)"
            : "drop-shadow(0px 0px 20px black)",
        }}
      />
    </div>
  );
}

export default Ai;