import React from 'react';
import {useTable} from 'react-table'

function EmployeeData(props){

    const data = React.useMemo(
        () => props.empdata,
            [],
          )
          const columns = React.useMemo(
            () => [
              {
                Header: 'Employee ID',
                accessor: 'emp_id', // accessor is the "key" in the data
              },
              {
                Header: 'First Name',
                accessor: 'first_name',
              },
              {
                Header: 'Last Name',
                accessor: 'last_name',
              },
              {
                Header: 'DoB',
                accessor: 'dob',
              },
              {
                Header: 'Rest Day',
                accessor: 'rest_day',
              },
              {
                Header: 'Department',
                accessor: 'department',
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
export default EmployeeData;