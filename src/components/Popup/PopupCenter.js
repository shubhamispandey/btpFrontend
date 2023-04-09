import { Card } from "@mui/material";
import Styles from "./PopupCenter.module.css";
import React, { useRef, useEffect } from "react";
import HTMLReactParser from "html-react-parser";

const PopUpCenter = ({
  ContentComp,
  isOpen,
  closeFun,
  isClosable = true,
  withBorder = false,
}) => {
  const primaryWrapperRef = useRef(null);
  const timeOutRef = useRef(null);
  console.log(isOpen);
  useEffect(() => {
    if (isOpen) {
      primaryWrapperRef.current.style.display = "flex";
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
      timeOutRef.current = setTimeout(() => {
        primaryWrapperRef.current.style.opacity = "1";
        primaryWrapperRef.current.style.pointerEvents = "all";

        primaryWrapperRef.current.childNodes[0].transform = "scale(1)";
        primaryWrapperRef.current.childNodes[0].style.opacity = "1";
      }, 1);
    } else {
      primaryWrapperRef.current.style.opacity = "0";
      primaryWrapperRef.current.childNodes[0].style.transform = "scale(0.7)";
      primaryWrapperRef.current.childNodes[0].style.opacity = "0.5";

      if (timeOutRef.current) clearTimeout(timeOutRef.current);
      timeOutRef.current = setTimeout(() => {
        if (primaryWrapperRef.current) {
          primaryWrapperRef.current.style.display = "none";
          primaryWrapperRef.current.style.pointerEvents = "none";
        }
      }, 250);
    }
  }, [isOpen]);

  const handleKeyDowns = (e) => {
    if (isOpen) {
      if (e.key === "Escape") {
        if (isClosable && closeFun) {
          closeFun();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDowns);

    return () => {
      document.removeEventListener("keydown", handleKeyDowns);
    };
  }, [isOpen, isClosable]);

  const handleWrapperClick = (e) => {
    if (isClosable && e.target === primaryWrapperRef.current && closeFun) {
      closeFun();
    }
  };

  return (
    <div
      className={Styles.Wrapper}
      ref={primaryWrapperRef}
      onClick={handleWrapperClick}
    >
      <div
        className={Styles.Container}
        style={withBorder ? {} : { border: "none" }}
      >
        <Card className={Styles.PopupCard}>
          {HTMLReactParser(ContentComp || "") ?? null}
        </Card>
      </div>
    </div>
  );
};

export default PopUpCenter;
