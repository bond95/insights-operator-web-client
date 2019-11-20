import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import { getClustersList, createMustGatherTrigger, addModal, closeModal } from '_/actions';
import { generateRandomString } from '_/utils';
import { sortable } from '@patternfly/react-table';

import Table from '../Table';
import CreateTriggerModal from './CreateTriggerModal';

class Clusters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCluster: {},
    };
    this.modalId = generateRandomString();
    this.handleTriggerCreate = this.handleTriggerCreate.bind(this);
    this.handleTriggerModalClose = this.handleTriggerModalClose.bind(this);
    this.handleTriggerModalOpen = this.handleTriggerModalOpen.bind(this);
  }
  handleTriggerModalOpen(selectedCluster) {
    this.modalId = generateRandomString();
    this.props.openModal(this.modalId);
    this.setState({ selectedCluster });
  }
  handleTriggerCreate({ reason, link }) {
    const { config, createTrigger } = this.props;
    createTrigger({
      reason,
      clusterName: this.state.selectedCluster.name.title,
      username: config.user.name,
      link,
      modalId: this.modalId,
    });
  }
  handleTriggerModalClose() {
    this.props.closeModal(this.modalId);
  }
  componentDidMount() {
    this.props.list();
  }
  render() {
    const { modals }  = this.props;
    const columns = [
      { title: 'Cluster ID', transforms: [ sortable ], mapper: 'id' },
      { title: 'Name', transforms: [ sortable ], mapper: 'name' },
    ];

    const actions = [
      {
        title: 'Create trigger',
        onClick: (event, rowId, rowData) => this.handleTriggerModalOpen(rowData),
      },
    ];

    return (
      <React.Fragment>
        <PageHeader>
          <PageHeaderTitle title='Clusters List'/>
        </PageHeader>
        <Main>
          <Table actions={actions} label='Clusters List' columns={columns} rows={Object.values(this.props.clusters.clusters)} />
        </Main>
        <CreateTriggerModal
          onConfirm={this.handleTriggerCreate}
          onClose={this.handleTriggerModalClose}
          isOpen={!!modals[this.modalId]}
        />
      </React.Fragment>
    );
  }
}

Clusters.propTypes = {
  clusters: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
  list: PropTypes.func.isRequired,
  createTrigger: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    (state) => ({
      clusters: state.clusters,
      config: state.config,
      modals: state.modals,
    }),
    (dispatch) => ({
      list: () => dispatch(getClustersList()),
      createTrigger: ({
        clusterName,
        reason,
        link,
        username,
        modalId,
      }) => dispatch(createMustGatherTrigger({ clusterName, reason, link, username, modalId })),
      openModal: (modalId) => dispatch(addModal({ modalId })),
      closeModal: (modalId) => dispatch(closeModal({ modalId })),
    })
  )(Clusters));
