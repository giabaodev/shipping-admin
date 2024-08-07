'use client';

import CustomTable from '@/components/ui/table';
import api from '@/config/axios';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get('/users');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Table columns
  const columns = [
    {
      name: 'Id',
      uid: 'id',
    },
    {
      name: 'Full Name',
      uid: 'name',
    },
    {
      name: 'Content',
      uid: 'body',
    },
  ];

  return <CustomTable tableData={data} columns={columns} searchBox />;
};

export default ProductPage;
