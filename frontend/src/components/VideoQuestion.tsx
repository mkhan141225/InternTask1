import React from "react";
import { Input, Form, Select, Button } from "antd";

const VideoQuestion: React.FC = () => {
  return (
    <div style={{ overflowY: "auto", height: "500px", width: "100%" }}>
      <Form layout="vertical">
        <Form.Item label="Tell us about yourself?" style={{ marginTop: 30 }}>
          <Input
            style={{
              width: 250,
              border: "none",
              borderBottom: " 1px solid ",
              borderRadius: 0,
              padding: "5px ",
              outline: "none",
              marginBottom: 50,
            }}
          />
        </Form.Item>
        <Form.Item
          label="Why did you apply for this program?"
          style={{ marginTop: 50 }}
        >
          <Input
            style={{
              width: 250,
              border: "none",
              borderBottom: " 1px solid ",
              borderRadius: 0,
              padding: "5px ",
              outline: "none",
              marginBottom: 50,
            }}
          />
        </Form.Item>
        <Form.Item label="Question" style={{ marginTop: 50 }}>
          <Input
            placeholder="tell us about yourself"
            style={{
              width: 250,
              padding: "5px ",
              marginBottom: 50,
            }}
          />
        </Form.Item>
        <div
          style={{
            marginTop: 50,
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          <Input
            placeholder="Max duration of video"
            style={{
              width: 170,
              padding: "5px ",
              marginBottom: 50,
            }}
          />
          <Select
            placeholder="(sec/min)"
            style={{
              width: 90,
              marginBottom: 50,
            }}
            options={[
              {
                value: "1",
                label: "minutes",
              },
              {
                value: "2",
                label: "seconds",
              },
            ]}
          />
        </div>

        <div
          style={{
            marginTop: 50,
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          <p style={{ color: "#A80000", fontSize: "16px" }}>Delete</p>
          <Button>Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default VideoQuestion;

