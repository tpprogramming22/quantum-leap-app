import React, { useEffect, useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RevenueChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Glucose Levels',
      type: 'line',
      data: [5, 6, 7, 8, 9, 10, 11],
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = series[0].data.map(() =>
        Math.floor(Math.random() * 7) + 5
      );
      setSeries([
        {
          ...series[0],
          data: randomData,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
      stacked: false,
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: [3],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    colors: ['#ff0000'],
    xaxis: {
      categories: ['4:00pm', '4:10pm', '4:20pm', '4:30pm', '4:40pm', '4:50pm', '5:00pm'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#adb5bd',
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      min: 5,
      max: 11,
      forceNiceScale: true,
      labels: {
        style: {
          colors: '#adb5bd',
        },
        formatter: (value) => {
          return value.toFixed(0);
        },
      },
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <Card>
      <Card.Body>
        <Dropdown className="float-end" align="end">
          <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
            <i className="mdi mdi-dots-vertical"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something Else</Dropdown.Item>
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h4 className="header-title mt-0">Glucose Levels (mmol/L)</h4>

        <div dir="ltr">
          <Chart
            options={options}
            series={series}
            type="line"
            height={268}
            className="apex-charts mt-2"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RevenueChart;
