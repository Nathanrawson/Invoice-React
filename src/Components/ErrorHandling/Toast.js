import React, { useEffect } from "react";

const Toast = ({ message, type, setToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, setToast]);

  const handleClose = () => {
    setToast({ message: "", type: "" });
  };

  if (!message) {
    return null;
  }

  return (
    <div
      className={`toast toast-${type}`}
      style={{
        display: type === "error" ? "block" : "none",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        padding: "10px",
        backgroundColor: type === "error" ? "red" : "white", // More vibrant red
        border: "1px solid",
        borderColor: type === "error" ? "#ff5555" : "black", // More vibrant red
        borderRadius: "5px",
      }}
    >
      {message}
      <button
        onClick={handleClose}
        style={{
          float: "right",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </div>
  );
};

export default Toast;
