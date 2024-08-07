import { SearchIcon } from '@/icons';
import {
  getKeyValue,
  Input,
  Table as NextTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import React, { useCallback, useMemo } from 'react';
import { CustomTableProps } from './props';

const CustomTable: React.FC<CustomTableProps<unknown>> = ({
  searchBox,
  columns,
  tableData,
  // props,
}) => {
  const renderCell = useCallback((user: any, columnKey: any) => {
    console.log('------------', columnKey);
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'id':
        return <div>abc</div>;
      case 'title':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.title}
            </p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        {/* <div className="flex justify-between gap-3 items-end"></div> */}
        <div className="flex justify-between items-center">
          {searchBox && (
            <Input
              isClearable
              classNames={{
                base: 'w-full sm:max-w-[44%]',
                inputWrapper: 'border-1',
              }}
              placeholder="Search by name..."
              size="sm"
              startContent={<SearchIcon className="text-default-300" />}
              // value={filterValue}
              variant="bordered"
              // onClear={() => setFilterValue('')}
              // onValueChange={onSearchChange}
            />
          )}
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              //   onChange={onRowsPerPageChange}
            >
              <option value="5">10</option>
              <option value="10">20</option>
              <option value="15">50</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [searchBox]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        {/* <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background',
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items.length} selected`}
        </span> */}
      </div>
    );
  }, []);

  return (
    <NextTable
      topContent={topContent}
      bottomContent={bottomContent}
      // {...props}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            // allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No data'} items={tableData} lo>
        {(item) => (
          <TableRow key={Date.now() + Math.floor(Math.random() * 33333)}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </NextTable>
  );
};

export default CustomTable;
