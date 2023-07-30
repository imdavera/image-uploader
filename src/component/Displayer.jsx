import { useSelector } from 'react-redux';
import { selectImageUrl } from '@/store/slice/imageSlice';

import Clipper from '@/partial/Displayer/Clipper';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Displayer = () => {
  const imageUrl = useSelector(selectImageUrl);

  return (
    <article className='displayer'>
      <section className='displayer__header'>
        <CheckCircleIcon />
        <h2>Uploaded Successfully!</h2>
      </section>
      <img src={imageUrl} alt='Uploaded Image' />
      <Clipper text={imageUrl} />
    </article>
  );
};

export default Displayer;
