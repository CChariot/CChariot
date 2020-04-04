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

    /*renderEmployeeList = () => {

        let data = this.state.data;

        if(data){

            let jsxdatalist = data.map( (employee) =>
                <div className='col-6 mx-auto col-md-6 col-lg-3 my-3 rounded float-left' key={employee.emp_id}>
                
                <div className='card'>
                    <div className='card-content'>
                        <span className='card-title'>{employee.emp_id}</span>
                        
                        <br />{employee.first_name}&nbsp;&nbsp;{employee.last_name}<br />
                        DoB: {employee.dob.split("T")[0]}<br />
                        Rest day: {employee.rest_day.split("T")[0]}<br />
                    </div>
                
                    <div className='card-action'>
                        <button className='btn btn-outline-info'
                            onClick={console.log('i dont know what to do now')}>Add in future</button>
                    </div>
                </div>
                </div>
            );

            return jsxdatalist;
        }
        else return null;
    };*/
}
export default EmployeeData;