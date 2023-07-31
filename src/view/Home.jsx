import { useSelector } from 'react-redux';
import { selectImageState, selectImageError } from '@/store/slice/imageSlice';

import Uploader from '@/component/Uploader';
import Displayer from '@/component/Displayer';
import Error from '@/component/Error';
import Loader from '@/component/Loader';

function Home() {
  const imageState = useSelector(selectImageState);
  const imageError = useSelector(selectImageError);

  if (imageState === 'loading') {
    return <Loader />;
  }

  if (imageState === 'succeeded') {
    return <Displayer />;
  }

  if (imageState === 'failed') {
    return <Error error={imageError} />;
  }

  return <Uploader />;
}

export default Home;
