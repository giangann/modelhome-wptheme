import './style.css';
import 'suneditor/dist/css/suneditor.min.css';

import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const Content = (props: { content: string }) => {
  const { content } = props;

  function createMarkup() {
    return { __html: content || content !== null ? content : '' };
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
  return (
    <div
      id="sunedit-area"
      className="sun-editor-editable"
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};
