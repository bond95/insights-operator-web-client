import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import { getTriggersList } from '_/actions';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';

import { sortable } from '@patternfly/react-table';

import Table from '../Table';

class Triggers extends Component {
  componentDidMount() {
    this.props.list();
  }
  render() {
    const columns = [
      { title: 'Trigger ID', transforms: [ sortable ], mapper: 'id' },
      { title: 'Type', transforms: [ sortable ], mapper: 'type' },
      { title: 'Cluster', transforms: [ sortable ], mapper: 'cluster' },
      { title: 'Reason', mapper: 'reason' },
      { title: 'Link', mapper: 'link' },
      { title: 'Active', mapper: (trigger) => trigger.active ? <CheckCircleIcon /> : <TimesCircleIcon /> },
    ];
    return (
      <React.Fragment>
        <PageHeader>
          <PageHeaderTitle title='Triggers List'/>
        </PageHeader>
        <Main>
          <Table label='Triggers List' columns={columns} rows={Object.values(this.props.triggers)} />
        </Main>
      </React.Fragment>
    );
  }
}

Triggers.propTypes = {
  triggers: PropTypes.object.isRequired,
  list: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    (state) => ({
      triggers: state.triggers,
    }),
    (dispatch) => ({
      list: () => dispatch(getTriggersList()),
    })
  )(Triggers));
