import { BackIcon } from "../../icons";
import { ButtonPrev } from "./ChoiseCancelPrev.styled";

function ChoiseCancelPrev({ currentPage, handleDefinePage }) {
  return (
    <>
      <ButtonPrev
        type="button"
        onClick={handleDefinePage(-1)}
      >
        <BackIcon />
        { currentPage === 0 ? "Сancel" : "Back" }
      </ButtonPrev>
    </>
  )
}

export default ChoiseCancelPrev;