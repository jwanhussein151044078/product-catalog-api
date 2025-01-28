import React, { useMemo } from 'react';
import { Table , Tag} from 'antd';

export function CatalogTable(props){
  
  const onSelectRow=(item)=>{
    props.onClickRow?.(item);
  }

  

  const columns = useMemo(()=>{
    return [
      {
        title: 'Name',
        width: 150,
        dataIndex: 'genericName',
        key: 'genericName',
        fixed: 'left',
      },
      {
        title: 'Publisher',
        width: 150,
        dataIndex: 'publisher',
        key: 'publisher',
        render: (publisher) =>{ 
          return <Tag color={"green"}>
            {publisher}
          </Tag>
        }, 
      },
      {
        title: 'Publisher SKU',
        dataIndex: 'publisherSKU',
        key: 'publisherSKU',
        width: 150,
      },
      {
        title: 'Platform',
        dataIndex: 'platform',
        key: 'platform',
        width: 150,
        fixed: 'left',
      },
      {
        title: 'Platform SKU',
        dataIndex: 'platformSKU',
        key: 'platformSKU',
        width: 150,
      }
    ];
  },[]);
  
  return (
    <div className='h-full w-full'>
      <Table
        rowHoverable
        rowClassName = {"font-medium"}
        size='small'
        columns={columns}
        dataSource={props.list ?? []}
        scroll={{
          x: '100%',
          y: `100%` 
        }}
        loading = {props.loading ?? false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {onSelectRow(record)}
          };
        }}
        pagination={false}
      />
    </div>
  );
};