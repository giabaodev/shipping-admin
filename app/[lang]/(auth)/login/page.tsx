'use client';

import { Button, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { ChangeEvent, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

enum InputType {
  Username = 'USERNAME',
  Password = 'PASSWORD',
}

const LoginPage = () => {
  const t = useTranslations('auth');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isVisible, setIsVisible] = React.useState(false);

  const handleChangeInput = (type: InputType, value: string) => {
    value = value.trim();
    switch (type) {
      case InputType.Username:
        setUsername(value);
        break;
      case InputType.Password:
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="flex flex-col">
      <div className="mb-4 p-2">
        <h1 className="font-bold italic text-2xl text-center">
          Administrator only
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <Input
          type="text"
          autoFocus
          variant="bordered"
          color="default"
          placeholder={t('usname')}
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(InputType.Username, e.target.value)
          }
        />
        <Input
          variant="bordered"
          placeholder={t('pwd')}
          value={password}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <AiFillEyeInvisible className="text-2xl pointer-events-none" />
              ) : (
                <AiFillEye className="text-2xl pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(InputType.Password, e.target.value)
          }
        />
        <Button
          color="default"
          radius="lg"
          variant="shadow"
          className="bg-gradient-to-r from-[#556270] from-0% via-[#FF6B6B] via-51% to-[#556270] to-100%"
        >
          {t('lg')}
        </Button>
      </div>
    </section>
  );
};

export default LoginPage;
