import { PawIcon } from "../../icons";
import { ButtonNext } from "./ChoiseDoneNext.styled";

function ChoiseDoneNext({ currentPage, disabled, handleDefinePage }) {
  return (
    <>
      {
         currentPage === 3 ?
          <ButtonNext type="submit">
            Done
            <PawIcon />
          </ButtonNext>
          :
          (
            <ButtonNext
              disabled={disabled}
              onClick={handleDefinePage(1)}
              type="button"
            >
                {currentPage === 2 ? "Done" : "Next"}
              <PawIcon />
            </ButtonNext>
          )
      }
    </>
  )
}

export default ChoiseDoneNext;