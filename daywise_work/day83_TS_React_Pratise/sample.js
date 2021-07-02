import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const StyledTable = styled.table<TableProps>`
      border-collapse: separate; 
      border-spacing: 0 15px;
      display: table;
      overflow: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      table-layout: fixed;
      width: 1200px;
`;

export type TableProps = PropsWithChildren<{
  className?: string;
}>;

export const Table = ({ children, className }: TableProps) => {
  return (
   <StyledTable className={className}>
     {children} 
   </StyledTable>
  );
};

