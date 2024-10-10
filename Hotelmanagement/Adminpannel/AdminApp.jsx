import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); // Example API

const AdminApp=()=>{

return <>

<Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>

</>
}

export default AdminApp;