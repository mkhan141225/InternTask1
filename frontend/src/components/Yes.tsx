import React from 'react';
import { Input, Typography } from 'antd';

const Yes: React.FC = () => {
  return (
    <div>
      <Typography.Title style={{ fontSize: "16px", marginTop: 15 }}>
        Question
      </Typography.Title>
      <div style={{ marginTop: 15 }}>
        <Input placeholder="Type here" style={{ width: 250 }} />
      </div>
    </div>
  );
};

export default Yes;
