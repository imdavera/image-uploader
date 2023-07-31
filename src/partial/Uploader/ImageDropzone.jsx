import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { uploadImage, clearImageData } from '@/store/slice/imageSlice';

import landscapeIcon from '@/assets/landscape-icon.svg';

const ImageDropzone = () => {
  const dispatch = useDispatch();
  const [isDragOver, setIsDragOver] = useState(false);
  const handleUploadImage = (e) => {
    e.preventDefault();
    clearImageData();

    const file = e.dataTransfer.files[0];
    
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      return setIsDragOver(false);
    }

    dispatch(uploadImage(file));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  return (
    <section
      className={`uploader__dropzone ${isDragOver && 'uploader__dropzone--dragover'}`}
      onDrop={handleUploadImage}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <img
        src={landscapeIcon}
        alt='Landscape Icon'
        className={`uploader__dropzone-icon ${isDragOver && 'uploader__dropzone-icon--active'}`}
      />
      <p className='uploader__dropzone-text'>
        {isDragOver
          ? 'Release to upload on the web'
          : 'Drag & Drop your image here'}
      </p>
    </section>
  );
};

export default ImageDropzone;
