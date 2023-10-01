import React, { useState } from "react";
import { Input, Form, Select, Button, List } from "antd";

const DropDown: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim() !== "") {
      setDisplayedText([...displayedText, inputText]);
      setInputText("");
    }
  };

  return (
    <div style={{ overflowY: "auto", height: "450px" }}>
      <Form layout="vertical">
        <Form.Item
          label="Question"
          style={{ marginTop: 20, fontWeight: "bold" }}
        >
          <Input
            placeholder="Type here"
            style={{
              width: 250,
              padding: "5px ",
              outline: "none",
              marginBottom: 50,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Choice"
          style={{ marginTop: 50, fontWeight: "bold" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input
              placeholder="Type here"
              value={inputText}
              style={{}}
              onChange={handleInputChange}
            />
            <Button onClick={handleAddText}>+</Button>
          </div>
        </Form.Item>

        <div
          style={{
            marginTop: 50,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <p style={{ color: "#A80000", fontSize: "16px" }}>Delete</p>
          <Button>Save</Button>
        </div>
        <List
          style={{ marginTop: "30px" }}
          dataSource={displayedText}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Form>
    </div>
  );
};

export default DropDown;
