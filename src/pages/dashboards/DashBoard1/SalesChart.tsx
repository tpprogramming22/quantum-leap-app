import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SalesChart = () => {
    const apexOpts: ApexOptions = {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                formatter: (val: string) => {
                  return val;
                },
                offsetY: 4,
                color: '#98a6ad',
              },
              value: {
                show: true,
                formatter: (val: string) => {
                  return val;
                },
                color: '#98a6ad',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#0099ff', '#00cc66', '#ff3300'], // Blue, Green, Red
      legend: {
        show: true,
        position: 'bottom',
        height: 40,
        labels: {
          useSeriesColors: true,
        },
      },
      labels: ['Low', 'Normal', 'High'],
      tooltip: {
        enabled: false,
      },
    };
  
    const apexData = [4, 67, 19]; // Low, Normal, High
  
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
  
          <h4 className="header-title mt-0">90 Day Overview</h4>
  
          <div dir="ltr">
            <Chart
              options={apexOpts}
              series={apexData}
              type="donut"
              height={302}
              className="apex-charts mt-2"
            />
          </div>
        </Card.Body>
      </Card>
    );
  };

export default SalesChart;
