import React, { Component } from 'react';

const Video = ({ children }) => (
  <video controls width="480">
  {children}
  </video>
);

export default Video;
