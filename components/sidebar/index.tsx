'use client';

import { menuList } from '@/config';
import { MenuItem } from '@/config/menu';
import { Listbox, ListboxItem, User } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

const Sidebar = (): JSX.Element => {
  const navigate = useRouter();
  const handleNavigate = (path: string) => {
    navigate.push(path);
  };
  return (
    <div className={styles.sbWrapper}>
      <div className={styles.topSidebar}>
        <User
          name={
            <p className="truncate cursor-pointer font-bold">
              Bao Nguyen GiaNguyen Gia
            </p>
          }
          description="Administrator"
          avatarProps={{
            src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
          }}
          classNames={{
            wrapper: 'flex-1 truncate',
            name: 'w-full',
          }}
          className="p-2 justify-start"
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
      <div>Version 2.0</div>
    </div>
  );
};

export default Sidebar;
