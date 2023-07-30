import ImageDropzone from '@/partial/Uploader/ImageDropzone';
import UploadButton from '@/partial/Uploader/UploadButton';

const Uploader = () => {
  return (
    <article className='uploader'>
      <section className='uploader__header'>
        <h1 className='uploader__header-title'>Upload your image</h1>
        <p className='uploader__header-subtitle'>
          File should be JPG, JPEG, PNG, etc.
        </p>
      </section>
      <ImageDropzone />
      <section className='uploader__footer'>
        <span className='uploader__footer-text'>Or</span>
        <UploadButton />
      </section>
    </article>
  );
};

export default Uploader;
