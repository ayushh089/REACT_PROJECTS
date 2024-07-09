import React, { useState } from "react";

function Toast() {
  const [toasts, setToasts] = useState([]);

  const handleClose = (id) => {
    setToasts((prevToasts) => {
      const newToasts = prevToasts.filter((toast) => toast.id !== id);
      return newToasts;
    });
  };

  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    let className = "";

    switch (type) {
      case "success":
        className = "bg-green-400";
        break;
      case "alert":
        className = "bg-yellow-400";
        break;
      case "warning":
        className = "bg-red-400";
        break;
      default:
        className = "bg-gray-400";
        break;
    }

    const newToasts = [...toasts, { id, message, className }];
    setToasts(newToasts);
    setTimeout(() => {
      handleClose(id);
    }, 5000);
  };

  return (
    <div className="">
      <div className="fixed top-2 right-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${toast.className} w-48 p-4 mb-2 text-black rounded-lg relative animate-slide font-bold shadow-2xl`}
          >
            {toast.message}{" "}
            <span
              onClick={() => handleClose(toast.id)}
              className="absolute cursor-pointer right-4"
            >
              x
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 mx-auto text-center">
        <button
          onClick={() => handleAdd("Logged In", "success")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          LoggedIn
        </button>
        <button
          onClick={() => handleAdd("Spam", "alert")}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Spam
        </button>
        <button
          onClick={() => handleAdd("Error", "warning")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Error
        </button>
        <button
          onClick={() => handleAdd("Ordered", "success")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Ordered
        </button>
      </div>
    </div>
  );
}

export default Toast;
