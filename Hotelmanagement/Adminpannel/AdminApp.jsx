import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import jsonServerProvider from "ra-data-json-server";
const theme = createTheme();

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com"); // Example API

const AdminApp = () => {
  return (
    <>
     
      <ThemeProvider theme={theme} >
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
        
      </Admin>
    </ThemeProvider>
    </>
  );
};

export default AdminApp;
