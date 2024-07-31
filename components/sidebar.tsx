'use client';

import { menuList } from '@/config';
import { MenuItem } from '@/config/menu';
import { Listbox, ListboxItem, User } from '@nextui-org/react';

const Sidebar = (): JSX.Element => {
  return (
    <div className="h-full flex flex-col px-4 py-6 gap-4">
      <User
        name="Bao Nguyen"
        description="Administrator"
        avatarProps={{
          src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        }}
        className="p-2"
      />
      {menuList.map((list) => (
        <Listbox
          key={list.title}
          aria-label="Menu Bar"
          onAction={(key) => alert(key)}
          items={list.list}
          topContent={<span className="font-bold text-xs">{list.title}</span>}
          itemClasses={{
            base: 'px-3',
          }}
        >
          {(item: MenuItem) => (
            <ListboxItem
              key={item.label}
              className="text-xl"
              startContent={<item.icon className="text-lg" />}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      ))}
    </div>
  );
};

export default Sidebar;
