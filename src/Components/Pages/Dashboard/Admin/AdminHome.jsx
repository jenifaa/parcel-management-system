
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import dayjs from "dayjs"; 
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
      console.log(res.data);
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
        text: "Parcels Booked by Date",
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
        name: "Parcels Booked",
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
            name: "Parcels Booked",
            data: counts, 
          },
        ],
      });
    }
  }, [parcels]);

  return (
    <div className="admin-home" style={{ padding: "40px", backgroundColor: "#ecf0f1" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>Admin Dashboard</h1>
      <div className="mixed-chart" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%" 
        />
      </div>
    </div>
  );
};

export default AdminHome;
