import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

configure({
  adapter: new Adapter(),
});

const videoData = {
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
};

describe(`VideoPlayer e2e tests`, () => {
  it(`Start and Pause work correctly`, () => {
    const isPlaying = false;
    const videoPlayer = mount(
        <VideoPlayer
          muted
          isPlaying={isPlaying}
          source={videoData.preview}
          poster={videoData.poster}
        />);

    expect(videoPlayer.props().isPlaying).toEqual(false);

    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
