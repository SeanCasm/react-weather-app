import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
export const Spinner = ({ message = "" }) => {
  const [stopLoad, setStopLoad] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    setMsg(message);
    setTimeout(() => {
      setStopLoad(true);
      setMsg("La aplicación no responde, intente denuevo más tarde");
    }, 10000);
  }, []);

  return (
    <div className="text-center">
      <div className="mt-5">
        <div className="loading-spinner" hidden={stopLoad}></div>
        <div hidden={!stopLoad}>
          <GiCancel fontSize={32}/>
        </div>
      </div>
      <div className="mt-3">
        <span>{msg}</span>
      </div>
    </div>
  );
};
