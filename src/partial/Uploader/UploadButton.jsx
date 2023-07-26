const UploadButton = () => {
  return (
    <>
      <label htmlFor="image-upload-input" className="uploader__footer-button">
        Choose a File
      </label>
      <input
        type="file"
        id="image-upload-input"
        accept="image/*"
        className="uploader__footer-input"
      />
    </>
  );
};

export default UploadButton;
