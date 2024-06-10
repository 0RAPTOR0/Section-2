'use client';
import { Button, Container, Drawer, Input, MultiSelect, Rating } from '@mantine/core';
import React from 'react'
import { IconSearch } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks';

const MantineComponents = () => {

    const [ opened, {open, close} ] = useDisclosure(false)
  return (
    <Container>
        <Input
         mt={50}
          placeholder='Enter Your Query'
          size='md'
          varient='filled'
          radius={10}
        //   error='Error Message'
        rightSection={
            <IconSearch />
        }

           />

           <Rating mt={50} size={40} color='pink' fractions={10}/>

           <MultiSelect
           label="Select Genre"
           placeholder='Pick genres'
           data={['Action', 'Drama', 'Comedy', 'Horror', 'Thriller','Animated']}
           />

           <button mt="lg" variant='outline' color='grape'onClick={open}>Open Drawer</button>

           <Drawer opened={opened}
            position='right' 
            onClose={close}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4}}>
            <h2>Drawe Content</h2>
           </Drawer>

    </Container>
  )
}

export default MantineComponents;