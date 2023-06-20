import React from 'react';
import { Select } from 'antd';
import { AvatarProfile, Header as HeaderDS } from '@neogrid/design-system';
import { useUserLocaleContext } from '@neogrid/i18n';
import './styles.less';

const { Option } = Select;

export const Header = () => {
  const { setLocale, locale } = useUserLocaleContext();
  function onChange(lang: string) {
    setLocale(lang);
    localStorage.setItem('lang', lang);
  }

  return (
    <HeaderDS>
      <Select
        className="header-select"
        defaultValue={locale}
        onChange={(value) => onChange(value)}
      >
        <Option value="pt">PT</Option>
        <Option value="es">ES</Option>
        <Option value="en">EN</Option>
      </Select>

      <AvatarProfile fullName="User Name" email="user@email.com" />
    </HeaderDS>
  );
};
