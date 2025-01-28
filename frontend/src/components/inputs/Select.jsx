import { Select as AntdSelect, Typography } from "antd";
import React from "react";

export function Select(props){
  return (
    <div>
      <Typography.Title level={5}>{props.label}</Typography.Title>
      <AntdSelect
        {...props}
      />
    </div>
  )
}