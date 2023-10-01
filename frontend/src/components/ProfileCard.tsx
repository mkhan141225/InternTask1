import React from "react";
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
  Switch,
  Space,
} from "antd";
import UserMenu from "./UserMenu";
import { PlusCircleFilled } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Card from "./Card";

const ProfileCard: React.FC = () => {
  

  return (
    <div>
      <Card title={"Profile"}>
        <Form>
          <Row justify="space-evenly">
            <Form.Item
              style={{ fontWeight: 500 }}
              name="edu"
              label="Education"
            ></Form.Item>

            <Form.Item name="eduInternal">
              <Checkbox style={{ fontSize: "10px" }}>Mandatory</Checkbox>
            </Form.Item>

            <Form.Item label="show" name="eduSwitch">
              <Switch size="small" style={{fontSize:8}} />
            </Form.Item>
          </Row>

          <Row justify="space-evenly">
            <Form.Item
              style={{ fontWeight: 500 }}
              name="exp"
              label="Experience"
            ></Form.Item>

            <Form.Item name="expInternal">
              <Checkbox style={{ fontSize: "10px" }}>Mandatory</Checkbox>
            </Form.Item>

            <Form.Item label="show" name="expSwitch">
              <Switch size="small" style={{fontSize:8}} />
            </Form.Item>
          </Row>

          <Row justify="space-evenly">
            <Form.Item
              style={{ fontWeight: 500 }}
              name="resume"
              label="Resume"
            ></Form.Item>

            <Form.Item name="resumeInternal">
              <Checkbox style={{ fontSize: "10px" }}>Mandatory</Checkbox>
            </Form.Item>

            <Form.Item label="show" name="resumeSwitch">
              <Switch size="small"  style={{fontSize:8}} />
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ProfileCard;
