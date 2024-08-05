'use client';

import CustomTable from '@/components/ui/table';
import api from '@/config/axios';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const [data, setData] = useState([]);

  // Fetch data from API
  // Example:
  const fetchData = async () => {
    const response = await api.get('/posts');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  // Table columns
  const columns = [
    {
      name: 'Id',
      uid: 'id',
    },
    {
      name: 'Title',
      uid: 'title',
    },
    {
      name: 'Content',
      uid: 'body',
    },
  ];

  return <CustomTable tableData={data} columns={columns} />;
};

export default ProductPage;
