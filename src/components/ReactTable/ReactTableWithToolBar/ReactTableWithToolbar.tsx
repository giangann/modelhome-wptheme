import React from 'react';
import { TableOptions } from 'react-table';

import { Page } from '../../Page';
import { ReactTable } from '../ReactTable';
interface ReactTableWithToolBarProps<T extends object> extends TableOptions<T> {
  data: readonly T[];
  columns: any[];
  title?: string;
  sxCustom?: any;
  isLoading: boolean;
}

function ReactTableWithToolBar<T extends object>({
  data,
  columns,
  title,
  sxCustom,
  isLoading,
  onRowClick,
  ...props
}: ReactTableWithToolBarProps<T>) {
  console.log('table data', data);
  return (
    <Page title={title} sxCustom={sxCustom}>
      <ReactTable
        columns={columns}
        data={data || []}
        isLoading={isLoading}
        onRowClick={onRowClick}
        // handleChangeParams={handleChangeParams}
        // {...paginationData}
      />
    </Page>
  );
}

export { ReactTableWithToolBar };
