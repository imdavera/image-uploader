import { useSelector } from 'react-redux';
import { selectImageUrl } from '@/store/slice/imageSlice';

import Clipper from '@/partial/Displayer/Clipper';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Displayer = () => {
  const imageUrl = useSelector(selectImageUrl);

  return (
    <article className='displayer'>
      <section className='displayer__header'>
        <CheckCircleIcon className='displayer__header-icon' />
        <h2 className='displayer__header-title'>Uploaded Successfully!</h2>
      </section>
      <img src={imageUrl} alt='Uploaded Image' className='displayer__image' />
      <Clipper text={imageUrl} />
    </article>
  );
};

export default Displayer;
