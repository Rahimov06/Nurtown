"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Image from 'next/image';
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px",
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button fullWidth sx={{ backgroundColor: "#333333", color: "white", padding: '20px 0px' }} onClick={handleOpen}>Отправить</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 350, textAlign:"center" }}>
          <Image className='m-auto' src={"/success.png"} width={200} height={200} alt='not found' /> <br />
          <strong className='text-center text-3xl'>Спасибо !</strong> <br /> <br />
          <p>Ваше сообщение отправлено мы свяжемся с вами в <br />
            ближайшее время</p><br /> <br />
          <Button fullWidth sx={{ backgroundColor: "#333333", color: "white", padding: '20px 0px' }} onClick={handleClose}>ВЕРНУТСЯ НАЗАД</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className='bg-[#333333] cursor-pointer text-white p-[15px_25px]'>Орабтная связь</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 350 }}>
          <div className='flex w-full justify-between items-center'>
            <strong className='text-2xl'>Задать вопрос</strong>
            <Button onClick={handleClose} sx={{ color: "black",  }}><CloseIcon /></Button>
          </div> <br />
          <form action="">
            <TextField fullWidth label="Имя" variant="outlined" /> <br /><br />
            <TextField fullWidth label="Номер телефона*" variant="outlined" /> <br /><br />
            <TextField fullWidth label="E-mail*" variant="outlined" /> <br /><br />
            <TextField fullWidth label="Интересующий товар/услуга" variant="outlined" /> <br /><br />
            <textarea className="h-[100px] w-full rounded-[5px] border border-gray-300 p-3" placeholder="Сообщение*" variant="outlined" />
            <p><input type="checkbox" /> Отправляя заявку Вы соглашаетесь
              с политикой
              конфиденциальности</p>
          </form> <br />
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
