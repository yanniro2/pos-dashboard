// Import necessary libraries and modules
"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data (replace with actual data from your API or state management)
const salesData = [
  { employee: "John Doe", sales: 15000 },
  { employee: "Jane Smith", sales: 12000 },
  { employee: "Bob Johnson", sales: 18000 },
  // Add more employee data as needed
];

const attendanceData = [
  {
    employee: "John Doe",
    hoursWorked: 40,
    shiftStart: "9:00 AM",
    shiftEnd: "5:00 PM",
    lateArrivals: 2,
    overtimeHours: 5,
  },
  {
    employee: "Jane Smith",
    hoursWorked: 35,
    shiftStart: "9:30 AM",
    shiftEnd: "4:30 PM",
    lateArrivals: 1,
    overtimeHours: 3,
  },
  {
    employee: "Bob Johnson",
    hoursWorked: 45,
    shiftStart: "8:45 AM",
    shiftEnd: "6:00 PM",
    lateArrivals: 0,
    overtimeHours: 8,
  },
  // Add more employee data as needed
];

const salesByCategoryData = [
  { category: "Electronics", sales: 5000 },
  { category: "Clothing", sales: 8000 },
  { category: "Home Goods", sales: 7000 },
  // Add more category data as needed
];

const overtimeTrendData = [
  { month: "Jan", overtimeHours: 5 },
  { month: "Feb", overtimeHours: 8 },
  { month: "Mar", overtimeHours: 6 },
  // Add more monthly data as needed
];

const EmployeePerformance: React.FC = () => {
  const [salesMetrics, setSalesMetrics] = useState(salesData);
  const [attendanceMetrics, setAttendanceMetrics] = useState(attendanceData);

  useEffect(() => {
    // Fetch and update employee performance data from your API
    // Example: fetchSalesData().then((data) => setSalesMetrics(data));
    // Example: fetchAttendanceData().then((data) => setAttendanceMetrics(data));
  }, []); // Fetch data on component mount

  return (
    <section className="default-layout bg-skin-light overflow-y-auto text-skin-base">
      <div className="container mx-auto h-full p-1 flex  gap-3">
        <div className="w-1/2 h-full flex flex-col gap-3">
          <div className="w-full h-1/2 bg-skin-medium p-3 rounded-lg flex flex-col justify-between">
            <h3 className="h3 p-4">Sales by Employee</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={salesMetrics}>
                <XAxis dataKey="employee" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Bar
                  dataKey="sales"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full h-1/2   bg-skin-medium p-3 rounded-lg">
            <h3 className="h3 p-4">Sales by Category</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  dataKey="sales"
                  data={salesByCategoryData}
                  className="fill-primary"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-1/2 h-full   flex flex-col gap-3">
          <div className="flex flex-col gap-3 bg-skin-medium p-3 rounded-lg h-1/2">
            <h3 className="h3">Attendance and Shifts</h3>
            <table className="min-w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border px-4 py-2">Employee</th>
                  <th className="border px-4 py-2">Hours Worked</th>
                  <th className="border px-4 py-2">Shift Start</th>
                  <th className="border px-4 py-2">Shift End</th>
                  <th className="border px-4 py-2">Late Arrivals</th>
                  <th className="border px-4 py-2">Overtime Hours</th>
                </tr>
              </thead>
              <tbody>
                {attendanceMetrics.map((employee) => (
                  <tr key={employee.employee}>
                    <td className="border px-4 py-2">{employee.employee}</td>
                    <td className="border px-4 py-2">{employee.hoursWorked}</td>
                    <td className="border px-4 py-2">{employee.shiftStart}</td>
                    <td className="border px-4 py-2">{employee.shiftEnd}</td>
                    <td className="border px-4 py-2">
                      {employee.lateArrivals}
                    </td>
                    <td className="border px-4 py-2">
                      {employee.overtimeHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 bg-skin-medium p-3 rounded-lg h-1/2">
            <h3 className="h3 p-4">Overtime Trend</h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={overtimeTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                {/* <Tooltip />
                <Legend /> */}
                <Line
                  type="monotone"
                  dataKey="overtimeHours"
                  className="stroke-primary"
                  stroke="stroke-bg-primary"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeePerformance;
