import React from 'react';
import {useTable} from 'react-table'

function DepartmentData(props){

    const data = React.useMemo(
        () => props.depdata,
            [],
          )
          const columns = React.useMemo(
            () => [
              {
                Header: 'Department',
                accessor: 'department_name', // accessor is the "key" in the data
              },
              {
                Header: 'Operating Hour',
                accessor: 'operating_hour',
              },
              {
                Header: 'Supervisor\'s ID',
                accessor: 'sup_id',
              },
            ],
            [],
          )
          const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
          } = useTable({ columns, data })
          return (
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                            padding: '5px',
                            borderBottom: 'solid 3px red',
                            background: 'aliceblue',
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              border: 'solid 1px gray',
                              background: 'papayawhip',
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )
}
export default DepartmentData;