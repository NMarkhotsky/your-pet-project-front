import LoaderImg from '../../../assets/images/loader/loader.gif';
import { LoaderOverlay, ImgLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <ImgLoader src={LoaderImg} alt="Loading....." />
    </LoaderOverlay>
  );
};
