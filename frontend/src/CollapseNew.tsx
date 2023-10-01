import React, { useEffect, useState } from "react";
import {
  Collapse,
  message,
  Upload,
  Row,
  Col,
  Form,
  Button,
  Checkbox,
  Input,
  Select,
  Typography,
  Space,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Card from "./components/Card";
import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion";
import DropDown from "./components/DropDown";
import ParagraphQuestion from "./components/ParagraphQuestion";
import Yes from "./components/Yes";
import VideoQuestion from "./components/VideoQuestion";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import UserMenu from "./components/UserMenu";

import { FormInstance } from "antd/lib/form";

const { Option } = Select;

interface CollapseNewProps {}

const CollapseNew: React.FC<CollapseNewProps> = () => {
  const [question, setQuestion] = useState<string | null>(null);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const choices = [
    "Paragraph",
    "Short Answer",
    "Yes/No",
    "Dropdown",
    "Multiple choice",
    "Date",
    "Number",
    "File upload",
    "Video question",
  ];

  return (
    <div style={{ marginLeft: -65 }}>
      <Form onFinish={onFinish} style={{ width: 500 }}>
        <Form.List name="Students">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key} direction="horizontal">
                  <Card title="Questions">
                    <Typography.Title style={{ fontSize: "16px" }}>
                      Type
                    </Typography.Title>
                    <Space>
                      <Select
                        value={question ? question : "select"}
                        onChange={(value) => setQuestion(value)}
                        style={{
                          width: 250,
                          height: 35,
                        }}
                        options={choices.map((choice) => ({
                          label: choice,
                          value: choice,
                        }))}
                      />
                    </Space>
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {question === choices[0] && <div><ParagraphQuestion /></div>}
                      {question === choices[1] && <div></div>}
                      {question === choices[2] && <div><Yes /></div>}
                      {question === choices[3] && <div><DropDown /></div>}
                      {question === choices[4] && <div><MultipleChoiceQuestion /></div>}
                      {question === choices[5] && <div>this is date</div>}
                      {question === choices[6] && <div>this is number</div>}
                      {question === choices[7] && <div>this is file upload</div>}
                      {question === choices[8] && (
                        <div>
                          <VideoQuestion />
                        </div>
                      )}
                    </div>
                  </Card>
                  <MinusCircleOutlined
                    style={{ height: 40, color: "red" }}
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Button
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  add();
                }}
                style={{ outline: "none", border: "none", width: 100, marginLeft: 90 }}
              >
                Add Question
              </Button>
            </>
          )}
        </Form.List>
        <Button danger type="dashed" style={{ marginLeft: 500 }} htmlType="submit" onClick={onFinish}>
          submit
        </Button>
      </Form>
    </div>
  );
};

export default CollapseNew;
