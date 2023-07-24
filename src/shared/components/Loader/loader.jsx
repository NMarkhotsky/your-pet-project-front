import LoaderImg from '../../../assets/images/loader/LoaderCat.gif';
import { LoaderStyled, ImgLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ImgLoader src={LoaderImg} alt="Loading....." />
    </LoaderStyled>
  );
};
