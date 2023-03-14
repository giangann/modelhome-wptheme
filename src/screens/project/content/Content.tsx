import './style.css';

import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const Content = (props: { content: string }) => {
  const { content } = props;
  console.log('content', content);

  function createMarkup() {
    return { __html: content ? content : '' };
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
