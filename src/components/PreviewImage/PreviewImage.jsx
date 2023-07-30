/* eslint-disable react/prop-types */
import { Image } from "./PreviewImage.styled";

function PreviewImage({ file }) {

  return (
    <div style={{ width: "112px", height: "112px" }}>
      <Image src={file} alt="Preview" width={112} />
    </div>
  )
}

export default PreviewImage;
