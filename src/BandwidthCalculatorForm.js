import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-calculate';
import FormField from './Fields/FormField';
import CalculatorBar from './Fields/CalculatorBar';
import Flex from './Flex/Flex';
// import { flexPropTypes, getFlexProps } from './Flex/utils';

import DownloadingLargeFilesIcon from './Icons/DownloadingLargeFilesIcon';
import MediaFileSharingIcon from './Icons/MediaFileSharingIcon';
import StreamingMusicIcon from './Icons/StreamingMusicIcon';
import StreamingVideoIcon from './Icons/StreamingVideoIcon';
import UploadingLargeFilesIcon from './Icons/UploadingLargeFilesIcon';
import VideoConferencingIcon from './Icons/VideoConferencingIcon';
import VoipIcon from './Icons/VoipIcon';
import WebAndEmailIcon from './Icons/WebAndEmailIcon';
import { groupBy } from 'lodash';
import decorators from './decorators';

const baseData = {
  videoConferencing: {
    name: 'videoConferencing',
    active: false,
    quality: 'hd',
    users: 1,
    icon: 'VideoConferencingIcon',
    options: [{ label: 'HD', value: 'hd' }, { label: 'SD', value: 'sd' }],
    label: 'VIDEO CONFERENCING',
    mbps: 4,
    base: { sd: 1, hd: 4, uhd: 4 },
  },
  downloadingLargeFiles: {
    name: 'downloadingLargeFiles',
    active: false,
    quality: false,
    users: 1,
    icon: 'DownloadingLargeFilesIcon',
    label: 'DOWNLOADING LARGE FILES',
    mbps: 50,
    base: { sd: 50, hd: 50, uhd: 50 },
  },
  webAndEmail: {
    name: 'webAndEmail',
    active: false,
    quality: false,
    users: 1,
    icon: 'WebAndEmailIcon',
    label: 'WEB / EMAIL USAGE',
    mbps: 2,
    base: { sd: 1, hd: 1, uhd: 1 },
  },
  mediaFileSharing: {
    name: 'mediaFileSharing',
    active: false,
    quality: false,
    users: 1,
    icon: 'MediaFileSharingIcon',
    label: 'MEDIA / FILE SHARING',
    mbps: 10,
    base: { sd: 10, hd: 10, uhd: 10 },
  },
  uploadingLargeFiles: {
    name: 'uploadingLargeFiles',
    active: false,
    quality: false,
    users: 1,
    icon: 'UploadingLargeFilesIcon',
    label: 'UPLOADING LARGE FILES',
    mbps: 50,
    base: { sd: 50, hd: 50, uhd: 50 },
  },
  streamingMusic: {
    name: 'streamingMusic',
    active: false,
    quality: false,
    users: 1,
    icon: 'StreamingMusicIcon',
    label: 'STREAMING MUSIC',
    mbps: 1,
    base: { sd: 1, hd: 1, uhd: 1 },
  },
  voip: {
    name: 'voip',
    active: false,
    quality: false,
    users: 1,
    icon: 'VoipIcon',
    label: 'VOIP',
    mbps: 1,
    base: { sd: 1, hd: 1, uhd: 1 },
  },
  streamingVideo: {
    name: 'streamingVideo',
    active: false,
    quality: 'hd',
    users: 1,
    icon: 'StreamingVideoIcon',
    options: [
      { label: 'Ultra HD', value: 'uhd' },
      { label: 'HD', value: 'hd' },
      { label: 'SD', value: 'sd' },
    ],
    label: 'STREAMING VIDEO',
    mbps: 5,
    base: { sd: 3, hd: 5, uhd: 25 },
  },
};

const qualityOptions = {
  videoConferencing: [
    { label: 'SD', value: 'sd' },
    { label: 'HD', value: 'hd' },
  ],
  streamingVideo: [
    { label: 'SD', value: 'sd' },
    { label: 'HD', value: 'hd' },
    { label: 'Ultra HD', value: 'uhd' },
  ],
};
const initialValues = Object.keys(baseData)
  .map(name => {
    const { icon, ...rest } = baseData[name];
    return { ...rest };
  })
  .reduce((all, cur) => {
    const { name, options, label, ...rest } = cur;
    return { ...all, [name]: rest };
  }, {});
/////////////////////////
// const getTheFields = () => {
//   const fieldData = Object.keys(baseData)
//     .map(name => {
//       return { ...baseData[name], name };
//     })
//     .map(field => <FormField key={field.name} {...field} />);
//   return fieldData
//     .reduce(
//       (all, cur, i) => {
//         const allLength = all.length;
//         console.log('all', all);
//         console.log('allLength', allLength);
//         const targetLength = all[allLength - 1].length;
//         // const targetGroup =
//         if (targetLength < 4) {
//           all[allLength - 1].push(cur);
//         } else {
//           all.push([cur]);
//         }
//         return all;
//       },
//       [[]],
//     )
//     .map((group, index) => <Flex.X key={`group_${index}`}>{group}</Flex.X>);
// };
const BandwidthCalculatorForm = ({ onSubmit, validate, classes }) => (
  <Form
    onSubmit={_ => console.log('Submit ', _)}
    decorators={[decorators]}
    // subscription={{ submitting: true, pristine: true, values: true }}
    initialValues={{ ...initialValues, calculatorBar: 0 }}
    // validate={_ => _}
    render={({
      handleSubmit,
      reset,
      submitting,
      pristine,
      values,
      ...rest
    }) => (
      <Flex.Y grow={0}>
        <Flex.Y grow={0}>
          <Flex.X justify="between" className="formRow">
            <FormField {...rest} {...baseData.videoConferencing} />
            <FormField {...rest} {...baseData.downloadingLargeFiles} />
            <FormField {...rest} {...baseData.webAndEmail} />
            <FormField {...rest} {...baseData.mediaFileSharing} />
          </Flex.X>
          <Flex.X justify="between" className="formRow">
            <FormField {...rest} {...baseData.uploadingLargeFiles} />
            <FormField {...rest} {...baseData.streamingMusic} />
            <FormField {...rest} {...baseData.voip} />
            <FormField {...rest} {...baseData.streamingVideo} />
          </Flex.X>
        </Flex.Y>
        <Flex.X grow={0} className="formBarRow">
          <CalculatorBar />
        </Flex.X>
      </Flex.Y>
    )}
  />
);

export default BandwidthCalculatorForm;
