import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Form,
  FormGroup,
  TextInput,
} from '@patternfly/react-core';

class CreateTriggerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      link: '',
    };
    this.handleReason = this.handleReason.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }
  handleReason(reason) {
    this.setState({
      reason,
    });
  }
  handleLink(link) {
    this.setState({
      link,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ reason: '', link: '' });
    }
  }
  render() {
    const { isOpen, onConfirm, onClose } = this.props;
    const { reason, link } = this.state;
    return (
      <Modal
        isSmall
        title='Trigger must-gather'
        isOpen={isOpen}
        onClose={this.handleModalToggle}
        actions={[
          <Button
            isDisabled={!reason}
            key='confirm'
            variant='primary'
            onClick={() => onConfirm(this.state)}
          >
            Trigger
          </Button>,
          <Button key='cancel' variant='link' onClick={onClose}>
            Cancel
          </Button>,
        ]}
        isFooterLeftAligned
      >
        <Form isHorizontal>
          <FormGroup
            label='Reason'
            isRequired
            fieldId='reason-field'
            helperText='Please, enter reason of trigger'
          >
            <TextInput
              value={reason}
              isRequired
              type='text'
              id='reason-field'
              onChange={this.handleReason}
            />
          </FormGroup>
          <FormGroup
            label='Link'
            fieldId='link-field'
            helperText='Link to doc. with customer ACK'
          >
            <TextInput
              value={link}
              type='text'
              id='reason-field'
              onChange={this.handleLink}
            />
          </FormGroup>
        </Form>
      </Modal>
    );
  }
}

CreateTriggerModal.propTypes = {
  isOpen: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateTriggerModal;
