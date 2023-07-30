import { useSelector } from 'react-redux';
import { selectImageState, selectImageError } from './store/slice/imageSlice';

import Error from './component/Error';
import Loader from './component/Loader';

import Uploader from './component/Uploader';
import Displayer from './component/Displayer';

function App() {
  const imageState = useSelector(selectImageState);
  const imageError = useSelector(selectImageError);

  const mainWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  if (imageState === 'loading') {
    return <Loader />;
  }

  if (imageState === 'succeeded') {
    return <Displayer />;
  }

  if (imageState === 'failed') {
    return <Error error={imageError} />;
  }

  return (
    <main style={mainWrapperStyle}>
      <Uploader />
    </main>
  );
}

export default App;
