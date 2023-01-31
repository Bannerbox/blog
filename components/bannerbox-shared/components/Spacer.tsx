import React from 'react';

type Size = '8px' | '12px' | '16px';

type Props = {
  size: Size;
};

const Spacer: React.FC<Props> = ({ size }) => {
  return <div style={{ marginTop: size }}></div>;
};

export default Spacer;
