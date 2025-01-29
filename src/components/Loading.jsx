import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/65948b05-aa27-411b-ac58-835f89c76307/YmYdI9KS2H.lottie"
      loop
      autoplay
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) scale(0.3)",
      }}
    />
  );
};

export default Loading;
