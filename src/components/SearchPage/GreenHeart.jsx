import { useState } from "react";

const CustomHeart = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      style={{
        width: "2.5rem",
        height: "2.5rem",
        padding: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
        borderColor: active ? "green" : "gray",
        borderRadius: "50%",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        style={{ fill: active ? "green" : "white", stroke: "green", strokeWidth: "2" }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default CustomHeart;