import React from 'react';
import PropTypes from 'prop-types';

import {
  Table as PatternflyTable,
  TableHeader,
  TableBody,
  SortByDirection,
} from '@patternfly/react-table';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns,
      rows: props.rows.map(row => {
        const rowArr = [];
        for (let column of props.columns) {
          rowArr.push(row[column.mapper]);
        }

        return rowArr;
      }),
      sortBy: {},
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    this.setState({
      sortBy: {
        index,
        direction,
      },
    });
  }

  static sortRows (rows, state) {
    const { index, direction } = state.sortBy;
    let sortedRows = rows;
    if (index) {
      sortedRows = rows.sort((a, b) => a[index].localeCompare(b[index]));
    }

    return direction === SortByDirection.asc ? sortedRows : sortedRows.reverse();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      rows: Table.sortRows(props.rows.map(row => {
        const rowArr = [];
        for (let column of props.columns) {
          rowArr.push(row[column.mapper]);
        }

        return rowArr;
      }), state),
    };
  }

  render() {
    const { columns, rows, sortBy } = this.state;
    const { actions } = this.props;

    return (
      <PatternflyTable actions={actions} aria-label={this.props.label} sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </PatternflyTable>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default Table;
