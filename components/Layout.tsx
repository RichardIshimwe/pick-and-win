import React, {ReactNode} from 'react';
import ProgressBar from './ProgressBar';

interface Props {
    children: ReactNode;
  }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
