import React, { useState, useRef } from "react";

function useNotification(props) {
  const [isOpen, setOpen] = useState(false);
  const timer = useRef(null);

  return {
    show: () => {
      clearTimeout(timer.current);
      setOpen(true);
      timer.current = setTimeout(() => {}, props.timeout || 3000);
    },
    close: () => {
      clearTimeout(timer.current);
      setOpen(false);
    }
  };
}

function Notification(props) {}
