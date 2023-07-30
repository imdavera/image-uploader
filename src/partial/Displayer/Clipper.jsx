import { useEffect } from 'react';
import { useState } from 'react';

import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

const Clipper = ({ text }) => {
  const [isCopied, setIsCopied] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsCopied(null), 2000);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
    }
  };

  return (
    <section className='displayer__clipper'>
      <p className='displayer__clipper-text'>{text}</p>
      <button className='displayer__clipper-button' onClick={handleCopy}>
        {isCopied === null ? (
          'Copy Link'
        ) : isCopied ? (
          <CheckIcon />
        ) : (
          <XMarkIcon />
        )}
      </button>
    </section>
  );
};

export default Clipper;
