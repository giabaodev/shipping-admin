'use client';

import { Listbox, ListboxItem } from '@nextui-org/react';
import React from 'react';

const Sidebar = () => {
  return (
    <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
      <ListboxItem key="new">New file</ListboxItem>
      <ListboxItem key="copy">Copy link</ListboxItem>
      <ListboxItem key="edit">Edit file</ListboxItem>
      <ListboxItem key="delete" className="text-danger" color="danger">
        Delete file
      </ListboxItem>
    </Listbox>
  );
};

export default Sidebar;
