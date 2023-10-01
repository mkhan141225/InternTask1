import React, { useState } from "react";
import {
  message,
  Upload,
  Row,
  Form,
  Button,
  Checkbox,
  Input,
  Switch,
  Collapse,
} from "antd";
import UserMenu from "./UserMenu";

import ImgCrop from "antd-img-crop";

import {
  LoadingOutlined,
  PlusOutlined,

} from "@ant-design/icons";
import Card from "./Card";
import ProfileCard from "./ProfileCard";

import CollapseNew from "../CollapseNew";

const getBase64 = (img: File, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: File) => {
  const isJpgOrPng = 
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


interface MyComponentProps {
  defaultUnchecked?: boolean;
  labelCol?: { span: number };
  url?:string | undefined
  
}



const AppForm: React.FC<MyComponentProps> = () => {

 

  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();

 
  const handleChange = (info:any|string) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <UserMenu />
      <Card title={"Upload Image"}>
        <ImgCrop rotationSlider>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            onChange={handleChange}
            beforeUpload={beforeUpload}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </ImgCrop>
      </Card>

      <Card title={"Personal Information"}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" style={{ width: "100%" }}>
            <Input />
          </Form.Item>

          <Form.Item style={{ fontWeight: 500 }} name="exp" label="Phone">
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="phoneInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="phoneSwitch" label="hide"  labelCol={{ span: 10}}>
              <Switch
                size="small"
               
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          {/* nationality  */}

          <Form.Item style={{ fontWeight: 500 }} name="exp" label="Nationality">
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="natInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="natSwitch" label="hide"  labelCol={{ span: 10 }}>
              <Switch
                size="small"
             
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          {/* residence */}
          <Form.Item style={{ fontWeight: 500 }} name="exp" label="Residence">
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="resInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="resSwitch" label="hide"  labelCol={{ span: 10 }}>
              <Switch
                size="small"
                defaultChecked
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          {/* id */}

          <Form.Item style={{ fontWeight: 500 }} name="exp" label="ID Number">
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="idInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="idSwitch" label="hide"  labelCol={{ span: 10 }}>
              <Switch
                size="small"
            
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          {/* dob */}

          <Form.Item
            style={{ fontWeight: 500 }}
            name="exp"
            label="Date of Birth"
          >
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="dobInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="dobSwitch" label="hide"  labelCol={{ span: 10 }}>
              <Switch
                size="small"
              
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          {/* gender */}

          <Form.Item style={{ fontWeight: 500 }} name="exp" label="Gender">
            <Input />
          </Form.Item>

          <Row justify="end">
            <Form.Item name="genderInternal">
              <Checkbox style={{ fontSize: "14px", marginRight: "20px" }}>
                Internal
              </Checkbox>
            </Form.Item>
            <Form.Item name="genderSwitch" label="hide"  labelCol={{ span: 10 }}>
              <Switch
                size="small"
          
                style={{ marginRight: "10px" }}
              />
            </Form.Item>
          </Row>

          <br />
        </Form>

        <CollapseNew />
      </Card>

      <div>
        <ProfileCard />
      </div>
    </div>
  );
};

export default AppForm;
