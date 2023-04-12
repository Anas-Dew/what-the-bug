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
      <div css={override} size={150} style={{color: "white", margin: "2rem"}}>
        Hang tight! We're in Alpha Mode.
      </div>
    </div>
  );
};

export default FullscreenLoader;
