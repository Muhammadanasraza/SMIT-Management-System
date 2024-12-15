import * as React from "react"

// import {
//     // flexRender,
//     // getCoreRowModel,
//     // useReactTable,
// } from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import {

    // ColumnFiltersState,
    // SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export function StudentTable({
    columns,
    data,
}) {
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const [selectedColumn, setSelectedColumn] = React.useState("email");


    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })
    return (
        <div>

            <div className="flex justify-center items-center py-2 gap-2">
                <select className="border rounded px-2 py-1.5"
                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)
                    }
                >
                    <option value="email">Email</option>
                    <option value="section">Section</option>
                    <option value="batch">Batch</option>

                </select>
                <Input
                    placeholder={`Filter ${selectedColumn}...`}
                    value={(table.getColumn(selectedColumn)?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        // table.getColumn(selectedColumn)?.setFilterValue(event.target.value)
                      {  const value=event.target.value;
                        table.getColumn(selectedColumn)?.setFilterValue(value || "")}
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
