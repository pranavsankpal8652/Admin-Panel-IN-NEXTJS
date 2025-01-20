'use client';

import UsersList from '@/app/Components/UsersList';
import React from 'react';

export default function page() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Customer', status: 'Inactive' },
    { id: 3, name: 'Robert Brown', email: 'robert.brown@example.com', role: 'Vendor', status: 'Active' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Michael Lee', email: 'michael.lee@example.com', role: 'Customer', status: 'Inactive' },
  ];

  return (
  <UsersList users={users}/>
  );
}
