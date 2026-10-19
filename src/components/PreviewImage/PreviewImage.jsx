/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Image } from './PreviewImage.styled';
function PreviewImage({ file }) {
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  return <div style={{ width: '100%', height: '100%' }}><Image src={preview} alt="Preview" width={112} /></div>;
}
export default PreviewImage;
