/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Image } from './PreviewImage.styled';

function PreviewImage({ file }) {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Image src={preview} alt="Preview" width={112} />
    </div>
  );
}

export default PreviewImage;
