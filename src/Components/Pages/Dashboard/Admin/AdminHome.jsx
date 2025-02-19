import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure"; 

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
      return res.data;
    },
  });

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
        background: "#f4f7fa",
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          endingShape: "rounded",
        },
      },
      xaxis: {
        categories: [],
        title: {
          text: "Requested Delivery Date",
          style: {
            fontSize: "14px",
            color: "#7f8c8d",
          },
        },
      },
      yaxis: {
        title: {
          text: "Number of Parcels",
          style: {
            fontSize: "14px",
            color: "#7f8c8d",
          },
        },
        labels: {
          formatter: function (val) {
            return Math.floor(val);
          },
        },
        min: 0,
      },
      title: {
        text: "Parcels Booked by Date (Bar Chart)",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#34495e",
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#3498db",
        },
      },
    },
    series: [
      {
        name: "Parcels Booked (Bar)",
        data: [],
      },
    ],
    lineChartOptions: {
      chart: {
        id: "line-chart",
        toolbar: {
          show: false,
        },
        background: "#f4f7fa",
      },
      xaxis: {
        categories: [],
        title: {
          text: "Requested Delivery Date",
          style: {
            fontSize: "14px",
            color: "#7f8c8d",
          },
        },
      },
      yaxis: {
        title: {
          text: "Number of Parcels",
          style: {
            fontSize: "14px",
            color: "#7f8c8d",
          },
        },
        labels: {
          formatter: function (val) {
            return Math.floor(val);
          },
        },
        min: 0,
      },
      title: {
        text: "Parcels Booked by Date (Line Chart)",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#34495e",
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#3498db",
        },
      },
    },
    lineChartSeries: [
      {
        name: "Parcels Booked (Line)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (parcels.length > 0) {
      const groupedByDate = parcels.reduce((acc, parcel) => {
        const date = parcel.requestedDeliveryDate;
        if (!acc[date]) {
          acc[date] = 0;
        }
        acc[date] += 1;
        return acc;
      }, {});

      const dates = Object.keys(groupedByDate);
      const counts = Object.values(groupedByDate);

      setChartData({
        options: {
          ...chartData.options,
          xaxis: {
            categories: dates,
          },
        },
        series: [
          {
            name: "Parcels Booked (Bar)",
            data: counts,
          },
        ],
        lineChartOptions: {
          ...chartData.lineChartOptions,
          xaxis: {
            categories: dates,
          },
        },
        lineChartSeries: [
          {
            name: "Parcels Booked (Line)",
            data: counts,
          },
        ],
      });
    }
  }, [parcels]);

  return (
    <div className="admin-home px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-100  dark:bg-black dark:text-white min-h-screen">
      <h1 className="text-center text-lg sm:text-xl md:text-2xl   dark:text-white font-bold text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      
      <div className="mixed-chart w-full max-w-screen-lg mx-auto sm:h-[400px] md:h-[500px] lg:h-[600px] mb-8">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
        />
      </div>

    
      <div className="mixed-chart w-full max-w-screen-lg mx-auto sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Chart
          options={chartData.lineChartOptions}
          series={chartData.lineChartSeries}
          type="line"
          width="100%"
        />
      </div>
    </div>
  );
};

export default AdminHome;
