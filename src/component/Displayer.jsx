import { useSelector } from 'react-redux';
import { selectImageUrl } from '@/store/slice/imageSlice';

const Displayer = () => {
  const imageUrl = useSelector(selectImageUrl);

  return <img src={imageUrl} alt='Picture' />;
};

export default Displayer;
