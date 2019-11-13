import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import { getClustersList } from '_/actions';

import { sortable } from '@patternfly/react-table';

import Table from '../Table';

class Clusters extends Component {
  componentDidMount() {
    this.props.list();
  }
  render() {

    const columns = [
      { title: 'Cluster ID', transforms: [ sortable ], mapper: 'id' },
      { title: 'Name', transforms: [ sortable ], mapper: 'name' },
    ];
    return (
      <React.Fragment>
        <PageHeader>
          <PageHeaderTitle title='Clusters List'/>
        </PageHeader>
        <Main>
          <Table label='Clusters List' columns={columns} rows={Object.values(this.props.clusters.clusters)} />
        </Main>
      </React.Fragment>
    );
  }
}

Clusters.propTypes = {
  clusters: PropTypes.object.isRequired,
  list: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    (state) => ({
      clusters: state.clusters,
    }),
    (dispatch) => ({
      list: () => dispatch(getClustersList()),
    })
  )(Clusters));
