import React, { useMemo } from 'react';
import { useTable, useSortBy, useState, useEffect} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Columns.js';
import './SelectionTable.css';
import db from './firebase';

function SelectionTable() {
    const tableColumns = useMemo(() => COLUMNS, [])
    const tableData = useMemo(() => MOCK_DATA, [])

    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        db.collection('pokemons').onSnapshot(snapshot =>(
            setPokemons(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
    }, [])

    const tableInstance = useTable({
        columns: tableColumns,
        data: tableData
    },
    useSortBy
    )

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ?  ' ' : ' ') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default SelectionTable;