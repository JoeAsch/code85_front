//import ReactDOM from "react-dom/client";

import React, {useState, useEffect} from "react";
import {useTable} from "react-table";
import axios from "axios";
import Navbar from './Navbar';


function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns, data});
  return (<table {...getTableProps()}>
    <thead> {
      headerGroups.map((headerGroup) => (<tr {...headerGroup.getHeaderGroupProps()}> {
        headerGroup.headers.map((column) => (<th style={{ width: '175px'}} {...column.getHeaderProps()}> {
          column.render("Header")
        }</th>))
      } </tr>))
    } </thead>
    <tbody {...getTableBodyProps()}> {
      rows.map((row, i) => {
        prepareRow(row);
        return (<tr {...row.getRowProps()}> {
          row.cells.map((cell) => {
            return <td style={{border: '1px solid black'}} {...cell.getCellProps()}> {
              cell.render("Cell")
            }</td>;
          })
        } </tr>);
      })
    } </tbody>
  </table>);
}



function MyApp() {
  
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const columns = React.useMemo(() => [
    {
      Header: "Inventory Removal Tracker",
      columns: [
        {
          Header: "Date",
          accessor: "date"
        }, {
          Header: "Manager",
          accessor: "manager"
        }, {
            Header: "Reason",
            accessor: "reason"
        }, {
          Header: "Sku",
          accessor: "sku"
        }, {
          Header: "Quantity",
          accessor: "quantity"
        }, {
            Header: "Price",
            accessor: "price"
          }
      ]
     }
    ], []);
      

  useEffect(() => {
    async function getData() {
      await axios.get("http://localhost:8000/wel/").then((response) => {
        setData(response.data);
        setLoadingData(false);
      });
    }
    if (loadingData) {
      getData();
    }
  }, [loadingData]);

  return (<> {
    loadingData
      ? (<p>Loading...</p>)
      : (<Table columns={columns}
        data={data}/>)
  }
 
   </>
   
  );

  

}

export default MyApp;