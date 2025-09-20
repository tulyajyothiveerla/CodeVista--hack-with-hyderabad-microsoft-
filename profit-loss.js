import React, { useState } from 'react';

export default function App() {
  const [revenue, setRevenue] = useState(120000);
  const [expenses, setExpenses] = useState(80000);

  // Net profit calculation
  const netProfit = revenue - expenses;

  // Scale bars relative to max value for visualization
  const maxAmount = Math.max(revenue, expenses, 1);
  const revenueBarHeight = (revenue / maxAmount) * 100;
  const expensesBarHeight = (expenses / maxAmount) * 100;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <div className="container mx-auto p-4 md:p-8">

        {/* Navbar */}
        <header className="flex justify-between items-center py-4 md:py-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">INNOGRID</h1>
          <nav className="hidden sm:flex space-x-4 md:space-x-8">
            <a href="index.html" className="hover:text-purple-600 transition-colors duration-200">Home</a>
            <a href="events.html" className="hover:text-purple-600 transition-colors duration-200">Events</a>
            <a href="about.html" className="hover:text-purple-600 transition-colors duration-200">About</a>
          </nav>
        </header>

        {/* Page Title */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">Profit & Loss</h2>
          <p className="text-lg md:text-xl text-gray-500">Fiscal Year</p>
        </div>

        {/* Profit & Loss Card */}
        <div className="mt-8 bg-white p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

            {/* Left side: Inputs */}
            <div className="w-full md:w-3/5 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div className="font-semibold text-lg">Category</div>
                <div className="font-semibold text-lg">Amount</div>

                {/* Revenue Row */}
                <div>Revenue (₹)</div>
                <div>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
                    className="w-full p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-200"
                  />
                </div>

                {/* Expenses Row */}
                <div>Expenses (₹)</div>
                <div>
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(parseFloat(e.target.value) || 0)}
                    className="w-full p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-200"
                  />
                </div>

                {/* Net Profit Row */}
                <div className="font-bold text-lg">Net Profit</div>
                <div className="font-bold text-lg text-purple-600">
                  ₹{netProfit.toLocaleString("en-IN")}
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Download Report
              </button>
            </div>

            {/* Right side: Bar Chart */}
            <div className="w-full md:w-2/5 flex items-end justify-center h-64 space-x-10 border-l border-gray-200 pl-6">

              {/* Revenue Bar */}
              <div className="flex flex-col items-center">
                <div
                  className="bg-purple-500 rounded-t-lg transition-all duration-500 ease-out"
                  style={{ height: `${revenueBarHeight}%`, width: '50px', minHeight: '10px' }}
                ></div>
                <span className="mt-2 text-sm text-gray-600">Revenue</span>
              </div>

              {/* Expenses Bar */}
              <div className="flex flex-col items-center">
                <div
                  className="bg-purple-300 rounded-t-lg transition-all duration-500 ease-out"
                  style={{ height: `${expensesBarHeight}%`, width: '50px', minHeight: '10px' }}
                ></div>
                <span className="mt-2 text-sm text-gray-600">Expenses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}