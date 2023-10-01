import React, { useState } from "react";
import VideoQuestion from './VideoQuestion'
import {
  MinusCircleOutlined,
} from "@ant-design/icons";

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

import UserMenu from "./UserMenu";
import { PlusCircleFilled } from "@ant-design/icons";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Card from "./Card";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import DropDown from "./DropDown";
import ParagraphQuestion from "./ParagraphQuestion";
import Yes from "./Yes";

const greenButtonStyle = {
  backgroundColor: "#087B2F",
  color: "white",
  fontSize: "12px",
};

const AddQuestion: React.FC = () => {
  const [question, setQuestion] = useState<string | null>(null);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Card title={"Questions" } >
        <Typography.Title style={{ fontSize: "16px" }}>Type</Typography.Title>
        <Space>
          <Select
            value={question ? question : "select"}
            onChange={(value) => setQuestion(value)}
            style={{
              width: 250,
              height: 35,
            }}
            options={choices.map((choice) => {
              return {
                label: choice,
                value: choice,
              };
            })}
          />
        </Space>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {question === choices[0] && (
            <div>
              <ParagraphQuestion/>
            </div>
          )}
          {question === choices[1] && <div></div>}
          {question === choices[2] && <div><Yes/></div>}
          {question === choices[3] && <div><DropDown/></div>}
          {question === choices[4] && <div><MultipleChoiceQuestion/></div>}
          {question === choices[5] && <div>this is date</div>}
          {question === choices[6] && <div>this is number</div>}
          {question === choices[7] && <div>this is file upload</div>}
          {question === choices[8] && (
            <div>
            <VideoQuestion/>
            </div>
          )}
        </div>
        
      </Card>
    </div>
  );
};

export default AddQuestion;
