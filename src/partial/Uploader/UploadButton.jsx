import { useDispatch } from 'react-redux';
import { uploadImage } from '@/store/slice/imageSlice';

const UploadButton = () => {
  const dispatch = useDispatch();

  const handleUploadImage = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    dispatch(uploadImage(file));
  };

  return (
    <>
      <label htmlFor='image-upload-input' className='uploader__footer-button'>
        Choose a File
      </label>
      <input
        type='file'
        id='image-upload-input'
        accept='image/*'
        className='uploader__footer-input'
        onChange={handleUploadImage}
      />
    </>
  );
};

export default UploadButton;
