import { Flex, Input, Tag, Typography } from "antd";
import React from "react";

export function Tags(props){
  return (
    <div>
      <Typography.Title level={5}>{props.label}</Typography.Title>
      <Flex gap="4px 0" wrap>
        {props.value?.map((d)=>{
          return <Tag color="blue">{d}</Tag>
        })}
      </Flex>    
    </div>
    
  )
}