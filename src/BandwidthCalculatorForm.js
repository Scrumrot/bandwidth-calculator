import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import NumberofUsers from "./Inputs/NumberOfUsers";
import QualityButtons from "./Inputs/QualityButtons";
import Flex from "./Flex/Flex";
import { flexPropTypes, getFlexProps } from "./Flex/utils";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
const initialValues = {
  videoConferencing: 1,
  videoConferencingQuality: "hd",
  downloadingLargeFiles: 1,
  webAndEmail: 1,
  mediaFileSharing: 1,
  uploadingLargeFiles: 1,
  streamingMusicOrVoip: 1,
  streamingMusicOrVoipQuality: "sd",
  streamingVideo: 1
};
const qualityOptions = {
  videoConferencingQuality: [
    { label: "SD", value: "sd" },
    { label: "HD", value: "hd" }
  ],
  streamingMusicOrVoipQuality: [
    { label: "SD", value: "sd" },
    { label: "HD", value: "hd" },
    { label: "Ultra HD", value: "uhd" }
  ]
};

const BandwidthCalculatorForm = ({ onSubmit, validate, classes }) => (
  <Form
    onSubmit={_ => console.log("Submit ", _)}
    initialValues={initialValues}
    validate={_ => _}
    render={({ handleSubmit, reset, submitting, pristine, values }) => (
      <Flex.Y
        style={{ minHeight: "100vh" }}
        // onSubmit={handleSubmit}
        // style={{ display: "flex", flex: "1 1 auto" }}
      >
        <Flex.X basis="0">
          <Flex.Y basis="0" order={0}>
            <figure className="bc_img bc_videoConferencing" />
            <label>VIDEO CONFERENCING</label>
          </Flex.Y>
          <Flex.X basis="0" order={1} grow={3} alignItems="center">
            <Field
              basis="0"
              order={0}
              grow={0}
              name="videoConferencingQuality"
              component={QualityButtons}
              type="number"
              label="VIDEO CONFERENCING Quality"
              options={qualityOptions.videoConferencingQuality}
            />
            <Field
              basis="0"
              order={1}
              grow={2}
              name="videoConferencing"
              component={NumberofUsers}
              type="number"
              label="VIDEO CONFERENCING"
            />
          </Flex.X>
        </Flex.X>
        <Flex.X basis="0">
          <Flex.Y basis="0" order={0}>
            <figure className="bc_img bc_downloadingLargeFiles" />
            <label>DOWNLOADING LARGE FILES</label>
          </Flex.Y>
          <Flex.Y basis="0" order={1} grow={3}>
            <Field
              name="downloadingLargeFiles"
              component={NumberofUsers}
              type="number"
              label="DOWNLOADING LARGE FILES"
            />
          </Flex.Y>
        </Flex.X>
        <Flex.X basis="0">
          <Flex.Y basis="0" order={0}>
            <figure className="bc_img bc_webAndEmail" />
            <label>WEB/EMAIL USAGE</label>
          </Flex.Y>
          <Flex.Y basis="0" order={1} grow={3}>
            <Field
              name="webAndEmail"
              component={NumberofUsers}
              type="number"
              label="WEB/EMAIL USAGE"
            />
          </Flex.Y>
        </Flex.X>
        <Flex.X basis="0">
          <Flex.Y basis="100px" order={0}>
            <figure className="bc_img bc_mediaFileSharing" />
            <label>MEDIA/FILE SHARING</label>
          </Flex.Y>
          <Flex.Y basis="auto" order={1}>
            <Field
              name="mediaFileSharing"
              component={NumberofUsers}
              type="number"
              label="MEDIA/FILE SHARING"
            />
          </Flex.Y>
        </Flex.X>

        <Flex.X basis="0">
          <Flex.Y basis="0" order={0}>
            <figure className="bc_img bc_uploadingLargeFiles" />
            <label>UPLOADING LARGE FILES</label>
          </Flex.Y>
          <Flex.Y basis="0" order={1} grow={3}>
            <Field
              name="uploadingLargeFiles"
              component={NumberofUsers}
              type="number"
              label="UPLOADING LARGE FILES"
            />
          </Flex.Y>
        </Flex.X>
        <Flex.X basis="0">
          <Flex.Y basis="0" order={1} grow={3}>
            <figure className="bc_img bc_streamingMusicOrVoip" />
            <label>STREAMING MUSIC OR USING VOIP</label>
          </Flex.Y>
          <Flex.Y basis="0" order={1} grow={3}>
            <Field
              name="streamingMusicOrVoip"
              component={NumberofUsers}
              type="number"
              label="STREAMING MUSIC OR USING VOIP"
            />
            <Field
              name="streamingMusicOrVoipQuality"
              component={QualityButtons}
              type="number"
              label="STREAMING MUSIC OR USING VOIP Quality"
              options={qualityOptions.streamingMusicOrVoipQuality}
            />
          </Flex.Y>
        </Flex.X>
        <Flex.X basis="0">
          <figure className="bc_img bc_streamingVideo" />
          <label>STREAMING VIDEO</label>
          <Field
            name="streamingVideo"
            component={NumberofUsers}
            type="number"
            label="STREAMING VIDEO"
          />
        </Flex.X>
      </Flex.Y>
    )}
  />
);

export default BandwidthCalculatorForm;
