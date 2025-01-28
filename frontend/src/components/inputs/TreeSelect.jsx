import { TreeSelect as AntdTreeSelect, Typography } from "antd";
import React from "react";

export function TreeSelect(props){

  return (
    <div>
      <Typography.Title level={5}>{props.label}</Typography.Title>
      <AntdTreeSelect
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeDefaultExpandAll
        {...props}
      />
    </div>
  )
}