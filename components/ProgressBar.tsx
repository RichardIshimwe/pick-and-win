import React from 'react';
import TopLoadingBar from 'react-top-loading-bar';

const ProgressBar: React.FC = () => {
  const ref = React.useRef<any>(null);

  return <TopLoadingBar ref={ref} />;
};

export default ProgressBar;
