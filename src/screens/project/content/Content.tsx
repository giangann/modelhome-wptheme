import './style.css';

import { useEffect } from 'react';
import { useQuery } from 'react-query';
export const Content = () => {
  const { data: testSunData } = useQuery('posts');

  console.log('test Sun Data', testSunData);

  function createMarkup() {
    return { __html: testSunData ? 'testSunData[3].content' : '' };
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/js/suneditCustom.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id="sunedit-area" dangerouslySetInnerHTML={createMarkup()} />;
};
