import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { CatalogScreen, HomeScreen } from "../screens";
import { Layout } from "../layout";

export default function RootRouters(){
  return(<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/catalog" element={<CatalogScreen />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  </>);
}