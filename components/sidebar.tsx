'use client';

import { menuList } from '@/config';
import { MenuItem } from '@/config/menu';
import { Listbox, ListboxItem, User } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = (): JSX.Element => {
  const navigate = useRouter();
  const handleNavigate = (path: string) => {
    navigate.push(path);
  };
  return (
    <div className="h-full">
      <div className="h-full flex flex-col pl-2 pr-4 py-6 gap-4 bg-slate-800">
        <User
          name={
            <Link href={'https://google.com'} className="hover:underline">
              Bao
            </Link>
          }
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
            items={list.list}
            topContent={
              <span className="font-bold text-xs p-1">{list.title}</span>
            }
            itemClasses={{
              base: 'px-3 h-10',
            }}
            // className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
          >
            {(item: MenuItem) => (
              <ListboxItem
                onClick={() => handleNavigate(item.path)}
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
    </div>
  );
};

export default Sidebar;
