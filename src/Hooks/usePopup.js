import {
  setPopupOpen,
  setPopupCenterOpen,
  setPopupComponentRender,
  setPopupCenterComponentRender,
} from "../Redux/Slices/Popup";
import { useDispatch } from "react-redux";

function usePopup() {
  const dispatch = useDispatch();

  const handlePopupOpen = (popupOpen) => {
    dispatch(setPopupOpen(popupOpen));
  };

  const handlePopupComponentRender = (popupComponent) => {
    dispatch(setPopupComponentRender(popupComponent));
  };

  const handlePopupCenterOpen = (popupCenterOpen) => {
    dispatch(setPopupCenterOpen(popupCenterOpen));
  };

  const handlePopupCenterComponentRender = (popupCenterComponent) => {
    dispatch(setPopupCenterComponentRender(popupCenterComponent));
  };
  return {
    handlePopupOpen,
    handlePopupComponentRender,
    handlePopupCenterOpen,
    handlePopupCenterComponentRender,
  };
}

export default usePopup;
