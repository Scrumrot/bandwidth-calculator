import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex/Flex';
// import { Form, Field } from 'react-final-form';
import DownloadingLargeFilesIcon from '../Icons/DownloadingLargeFilesIcon';
import MediaFileSharingIcon from '../Icons/MediaFileSharingIcon';
import StreamingMusicIcon from '../Icons/StreamingMusicIcon';
import StreamingVideoIcon from '../Icons/StreamingVideoIcon';
import UploadingLargeFilesIcon from '../Icons/UploadingLargeFilesIcon';
import VideoConferencingIcon from '../Icons/VideoConferencingIcon';
import VoipIcon from '../Icons/VoipIcon';
import WebAndEmailIcon from '../Icons/WebAndEmailIcon';

const icons = {
  DownloadingLargeFilesIcon: <DownloadingLargeFilesIcon />,
  MediaFileSharingIcon: <MediaFileSharingIcon />,
  StreamingMusicIcon: <StreamingMusicIcon />,
  StreamingVideoIcon: <StreamingVideoIcon />,
  UploadingLargeFilesIcon: <UploadingLargeFilesIcon />,
  VideoConferencingIcon: <VideoConferencingIcon />,
  VoipIcon: <VoipIcon />,
  WebAndEmailIcon: <WebAndEmailIcon />,
};
const ActiveToggle = ({
  body,
  className,
  label,
  icon = 'DownloadingLargeFilesIcon',
  input,
}) => {
  // const Icon = icons[icon];
  //require(`../Icons/${icon}`);
  if (input.value) {
    console.log('input', input);
  }
  return (
    <Flex.Y
      basis="auto"
      order={0}
      alignItems="center"
      grow={0}
      onClick={() => input.onChange(!input.value)}
      className={`active_toggle${!!input.value ? ` active` : ``}`}
    >
      <Flex className="active_toggle_top_left">
        <div
          className="orn_styled_checkbox"
          onClick={() => input.onChange(!input.value)}
        />
        <input
          type="checkbox"
          value={input.value}
          onChange={() => input.onChange(!input.value)}
        />
      </Flex>
      <figure className={`bc_img${className ? ` ${className}` : ''}`}>
        {icons[icon]}
      </figure>
      <label>
        <span>{label}</span>
      </label>
    </Flex.Y>
  );
};

ActiveToggle.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  icon: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  input: PropTypes.any.isRequired,
};

export default ActiveToggle;
