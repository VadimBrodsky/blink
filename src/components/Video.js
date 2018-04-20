import React, { Component } from 'react';

const Video = ({ children, src }) => (
  <video controls width="480" src={src}>
    {children}
  </video>
);

export default Video;
