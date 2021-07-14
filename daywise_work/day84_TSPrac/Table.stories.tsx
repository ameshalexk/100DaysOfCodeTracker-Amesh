import React from 'react';

import { Table, TableProps } from './Table';
import { TableRow } from '../tableRow/TableRow';
import { TableCellHeader } from '../tableCellHeader/TableCellHeader';
import { TableCell } from '../tableCell/TableCell';

export default {
  component: Table,
  title: 'Ardenvent Component Library/data/Table'
};

const Template = (args: TableProps) => <Table {...args} />;

export const Default = () => <Template>
  <TableRow>
    <TableCellHeader sortable={true} sortDirection={'BOTH'} onClick={() => someDataArray.sort(() => x - y)}>Last Name</TableCellHeader>
    <TableCellHeader>First Name</TableCellHeader>
    <TableCellHeader sortable={true} sortDirection={'BOTH'} onClick={() => someDataArray.sort(() => x - y)}>Date Admitted</TableCellHeader>
    <TableCellHeader sortable={true} sortDirection={'UP'} onClick={() => someDataArray.sort(() => x - y)}>Plan</TableCellHeader>
    <TableCellHeader sortable={true} sortDirection={'DOWN'} onClick={() => someDataArray.sort(() => x - y)}>Group</TableCellHeader>
    <TableCellHeader>Notes</TableCellHeader>
  </TableRow>
  <TableRow selected>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis?</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis?</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Smith</TableCell>
    <TableCell>Trevor</TableCell>
    <TableCell>11/20/2020</TableCell>
    <TableCell>Moderate</TableCell>
    <TableCell>Alpha</TableCell>
    <TableCell editable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi hic incidunt debitis neque deleniti dolores eaque doloremque ex reiciendis qui voluptates quas, officia odio id sunt odit ipsa perspiciatis? </TableCell>
  </TableRow>
</Template >;