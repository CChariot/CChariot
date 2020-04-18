import React from 'react';
import {useTable} from 'react-table'

function Attendance(props){

    const data = React.useMemo(
        () => props.data,
            [],
          )
          const columns = React.useMemo(
            () => [
              {
                Header: 'Date',
                accessor: 'att_date', // accessor is the "key" in the data
              },
              {
                Header: 'Emp_ID',
                accessor: 'emp_id',
              },
              {
                Header: 'Check in',
                accessor: 'check_in',
              },
              {
                Header: 'Lunch time',
                accessor: 'lunch_out',
              },
              {
                Header: 'Return from lunch',
                accessor: 'lunch_back',
              },
              {
                Header: 'Check out',
                accessor: 'check_out',
              }   
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
export default Attendance;