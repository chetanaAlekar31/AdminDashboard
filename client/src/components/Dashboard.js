
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ReactECharts from 'echarts-for-react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import './Dashboard.css';

// DataGrid columns and rows
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => {
            if (!params || !params.row) return ''; // Prevent undefined errors
            const firstName = params.row.firstName || '';
            const lastName = params.row.lastName || '';
            return `${firstName} ${lastName}`.trim();
        },
    },
];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Dashboard = () => {
    // Pie Chart 
    const pieOption = {
        tooltip: { trigger: 'item' },
        legend: { top: '5%', left: 'center' },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: { show: false, position: 'center' },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: { show: false },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };

    // Bar Chart 
    const barOption = {
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisTick: { alignWithLabel: true } },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Sales',
                type: 'bar',
                barWidth: '60%',
                data: [
                    120,
                    { value: 200, itemStyle: { color: '#a90000' } },
                    150,
                    80,
                    70,
                    110,
                    130
                ]
            }
        ]
    };

    // Line Chart 
    const lineOption = {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', areaStyle: {} }]
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <h2>Welcome to the Dashboard</h2>
                <div className="charts-container">
                    {/* Pie Chart */}
                    <div className="chart">
                        <h3>Access Source Pie Chart</h3>
                        <ReactECharts option={pieOption} style={{ height: '400px', width: '100%' }} />
                    </div>
                    {/* Bar Chart */}
                    <div className="chart">
                        <h3>Sales Bar Chart</h3>
                        <ReactECharts option={barOption} style={{ height: '400px', width: '100%' }} />
                    </div>
                    {/* Line Chart */}
                    <div className="chart">
                        <h3>Sales Line Chart</h3>
                        <ReactECharts option={lineOption} style={{ height: '400px', width: '100%' }} />
                    </div>
                </div>
                {/* Data Table */}
                <div className="table-container">
                    <h3>User Data Table</h3>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10]}
                            checkboxSelection
                            disableSelectionOnClick
                            sx={{ border: 0 }}
                        />
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
