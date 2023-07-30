import landscapeIcon from '@/assets/landscape-icon.svg';

const ImageDropzone = () => {
  return (
    <section className='uploader__dropzone'>
      <img src={landscapeIcon} alt='' className='uploader__dropzone-icon' />
      <p className='uploader__dropzone-text'>Drag & Drop your image here</p>
    </section>
  );
};

export default ImageDropzone;
