import { TreeSelect as AntdTreeSelect, Col, Flex, List, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { TextInput } from "../inputs";

export function AvabilityCard(props){

  return (
    <Flex className=" ">
      <Row gutter={16} className="w-full h-80 ">
        <Col span={12} className="h-full overflow-y-auto">
          <List
            header={<div>Available Countries</div>}
            bordered
            size = {"small"}
            dataSource={props.data?.countries ?? []}
            renderItem={(item) => <List.Item className="w-full">{item}</List.Item>}
            className="w-full "
          />
        </Col>
        <Col span={12} >
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Price"
                readOnly
                value = {props?.data?.price?.initialFormatted}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Currency"
                readOnly
                value = {props?.data?.price?.currency}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Platform"
                readOnly
                value = {props?.data?.platform}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Product ID"
                readOnly
                value = {props?.data?.productID}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Flex>
  )
}