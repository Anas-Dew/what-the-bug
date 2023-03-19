import React from 'react';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const FullscreenLoader = () => {
  return (
    <div className="fullscreen-loader">
      <div css={override} size={150} color={'#123abc'}>
        Hang tight!
      </div>
    </div>
  );
};

export default FullscreenLoader;
