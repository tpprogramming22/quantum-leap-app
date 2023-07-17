import React, { useState } from 'react';
import { Card, Dropdown, Button } from 'react-bootstrap';

const StatisticsChart = () => {
  const [scanning, setScanning] = useState(false);

  const handleMeasureNowClick = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 3000);
  };

  return (
    <Card style={{ outline: 'none', borderRadius: '8px' }}>
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

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleMeasureNowClick}
            disabled={scanning}
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            {scanning ? 'Scanning...' : 'Measure Now'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatisticsChart;
