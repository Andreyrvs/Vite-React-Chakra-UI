import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

export default function ToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconSwith = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;
  return (
    <IconButton icon={iconSwith} onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </IconButton>
  );
}
