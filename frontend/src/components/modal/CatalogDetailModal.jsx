import { Col, Divider, Drawer, Flex, notification, Row, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import axios from '../../api/axios';
import { Select, Tags, TextInput, TreeSelect } from '../inputs';
import { PrimaryBtn } from '../buttons';
import { AvabilityCard } from '../presentaion';

export function CatalogDetailModal(props){
  const [loading,setLoading] = useState(false);
  const [details,setDetails] = useState({});
  const [showAvailable , setShowAvalible] = useState(false);
  const [avalibilityRes , setAvalibilityRes] = useState({});

  const [avalibilityModel , setAvalibilityModel] = useState({});

  const countries = useMemo(()=>{
    if(details?.stock){
      return details.stock.map((d,ind)=>{
        return {
          title : `${d.geolock}(${d.qty})`,
          value :ind ,
          selectable : false,
          children : d.countries.map((country)=>{
            return {
              title : country,
              value : country
            }
          })
        }
      })
    } 
  },[details]);

  const currencies = useMemo(()=>{
    if(details?.prices){
      return details?.prices?.map((d)=>{
        return {
          title : d.currency,
          value : d.currency ,
        }
      })
    } 
  },[details]);

  const getDetailes=()=>{
    axios.get("/catalog/"+props.id)
    .then((res)=>{
      setDetails(res.data.data[0]);
    }).catch((err)=>{

    }).finally(()=>{
    })
  }

  const checkAvability=()=>{
    setLoading(true);
    axios.post("/catalog/"+props.id+"/check",{
      countryCode : avalibilityModel.country,
      currency    : avalibilityModel.currency,
      price       : avalibilityModel.price?.initial
    })
    .then((res)=>{
      setAvalibilityRes(res.data.data);
      setShowAvalible(true);
    }).catch((err)=>{
      console.log(err);
      notification.error({
        message     : err.response?.data?.title,
        description : err.response?.data?.message
      });
    }).finally(()=>{
      setLoading(false);
    })
    
  }

  const onChangeCountry=(val)=>{
    setAvalibilityModel({country:val});
  }

  const onChangeCurrency=(val)=>{
    setAvalibilityModel((prev) => {
      return {
        ...prev,
        currency: val,
        price: details.prices.find((d) => d.currency == val),
      };
    });
  }
  
  useEffect(()=>{
    if(props.id){
      getDetailes()
    }else{
      setDetails({});
      setAvalibilityModel({});
      setAvalibilityRes({});
      setShowAvalible(false);
    }
    return()=>{};
  },[props.id]);

  return(<>
    <Drawer
        title={details.genericName}
        placement="right"
        size='large'
        closable={true}
        onClose={()=> props.onClose?.()}
        open={props.open}
        getContainer={false}
      >
        <Flex
          vertical 
          className='' 
          gap={10}
        >
          <Row gutter={16}>
            <Col span={12}>
              <TextInput
                label = "Generic Name"
                readOnly
                value = {details?.genericName}
              />
            </Col>
            <Col span={12}>
              <TextInput
                label = "Edition"
                readOnly
                value = {details?.edition}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Type"
                readOnly
                value = {details?.type}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <TextInput
                label = "Point Nexus ID"
                readOnly
                value = {details?.id}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <TextInput
                label = "Publisher"
                readOnly
                value = {details?.publisher}
              />
            </Col>
            <Col span={12}>
              <TextInput
                label = "Publisher SKU"
                readOnly
                value = {details?.publisherSKU}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <TextInput
                label = "Platform"
                readOnly
                value = {details?.platform}
              />
            </Col>
            <Col span={12}>
              <TextInput
                label = "Platform SKU"
                readOnly
                value = {details?.platformSKU}
              />
            </Col>
          </Row>
          <Divider orientation="left">Details</Divider>
          <Row gutter={16}>
            <Col span={24}>
              <Tags
                label = "Genres"
                value = {details?.genres}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              {details.shortDescription?.["en-GB"] && <Typography.Text>{details.shortDescription?.["en-GB"]}</Typography.Text>}
            </Col>
            <Col span={24}>
              {details.longDescription?.["en-GB"] && <Typography.Text>{details.longDescription?.["en-GB"]}</Typography.Text>}
            </Col>
          </Row>
          
          <Divider orientation="left">Avalibility</Divider>
          <Row gutter={16}>
            <Col span={8}>
              <TreeSelect
                label = 'Country'
                className = "w-full"
                placeholder = "Select a country"
                treeData = {countries}
                onChange = {onChangeCountry}
                value    = {avalibilityModel?.country}
              />
            </Col>
            <Col span={8}>
              <Select
                label = 'Currency'
                className = "w-full"
                placeholder = "Select a country"
                options = {currencies}
                onChange = {onChangeCurrency}
                value    = {avalibilityModel?.currency}
              />
            </Col>
            <Col span={8}>
              <TextInput
                label = "Price"
                readOnly
                value = {avalibilityModel?.price?.priceFormatted}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <PrimaryBtn
                title   = "Check Catalog Avalibility"
                onClick = {checkAvability}
                className = "w-full"
                loading = {loading} 
                iconPosition={'end'}
                disabled = {!(avalibilityModel.price && avalibilityModel.currency)}
              />
            </Col>
          </Row>
          {showAvailable &&
            <Row gutter={16}>
              <Col span={24}>
                <AvabilityCard
                  data = {avalibilityRes}
                />
              </Col>
            </Row>
          }
          
        </Flex>
    </Drawer>
  </>);
};