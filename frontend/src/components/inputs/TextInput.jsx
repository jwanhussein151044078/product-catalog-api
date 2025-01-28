import { Input, Typography } from "antd";
import React from "react";

export function TextInput(props){
  return (
    <div>
      <Typography.Title level={5}>{props.label}</Typography.Title>
      <Input
        {...props}
      />
    </div>
  )
}