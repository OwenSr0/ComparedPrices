import React, {useState} from "react";
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const BlogAddBody = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [resume, setResume] = useState('');
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');

    async function addBlog() {
        if (!title || !resume || !autor || !date || !time || !data) {
            alert('Rellena todos los campos');
            return false;
        }
        try {
          const validate = {
            title: title,
            img: img,
            resume: resume,
            autor: autor,
            date: date,
            time: time,
            data: data
          };
          const res = await axios.post('http://localhost:80/api/blog/add', validate);
          navigate(`/blog`);
        } catch (error) {
          console.log(error);
        }
      }

    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Button>Eliminar</Button>
                <Button>Editar</Button>
                <Button variant="contained" color="success" onClick={addBlog}>Guardar</Button>
            </Box>
            <Box sx={stackText1}>
                <FormControl sx={stackForm} variant="filled">
                    <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Titulo</InputLabel>
                    <FilledInput style={{ fontSize: '18px',}}
                    onChange={(e) => {setTitle(e.target.value)}}
                    required={true}
                    label="title"
                    />
                </FormControl>
            </Box>
            <Box sx={stackText1}>
                <FormControl sx={stackForm} variant="filled">
                    <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Imagen</InputLabel>
                    <FilledInput style={{ fontSize: '18px',}}
                    onChange={(e) => {setImg(e.target.value)}}
                    required={true}
                    label="title"
                    />
                </FormControl>
            </Box>
            <Box sx={stackBox2}>
                <Box sx={stackText2}>
                    <FormControl sx={stackForm} variant="filled">
                        <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Autor</InputLabel>
                        <FilledInput style={{ fontSize: '18px',}}
                        onChange={(e) => {setAutor(e.target.value)}}
                        required={true}
                        label="autor"
                        />
                    </FormControl>
                </Box>
                <Box sx={stackText2}>
                    <FormControl sx={stackForm} variant="filled">
                        <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Fecha</InputLabel>
                        <FilledInput style={{ fontSize: '18px',}}
                        onChange={(e) => {setDate(e.target.value)}}
                        required={true}
                        label="date"
                        />
                    </FormControl>
                </Box>
                <Box sx={stackText2}>
                    <FormControl sx={stackForm} variant="filled">
                        <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Tiempo</InputLabel>
                        <FilledInput style={{ fontSize: '18px',}}
                        onChange={(e) => {setTime(e.target.value)}}
                        required={true}
                        label="time"
                        />
                    </FormControl>
                </Box>
            </Box>
            <Box sx={stackText1}>
                <FormControl sx={stackForm} variant="filled">
                    <TextField
                    id="standard-multiline-static"
                    label="Resumen"
                    multiline
                    rows={4}
                    variant="standard"
                    onChange={(e) => {setResume(e.target.value)}}
                    />
                </FormControl>
            </Box>
            <Box sx={stackText1}>
                <FormControl sx={stackForm} variant="filled">
                    <TextField
                    id="standard-multiline-static"
                    label="Datos"
                    multiline
                    rows={32}
                    variant="standard"
                    onChange={(e) => {setData(e.target.value)}}
                    />
                </FormControl>
            </Box>
        </Box>
    )
}

export default BlogAddBody;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2em'
}

const stackBox = {
    width: '30em',
    display: 'flex',
    justifyContent: 'space-between'
}

const stackBox2 = {
    display: 'flex'
}

const stackText1 = {
    display: 'flex',
    flexDirection: 'column',
    width: {
      xs: '15em',
      sm: '30em'
    },
    margin: '1em'
  }
  const stackText2 = {
    display: 'flex',
    flexDirection: 'column',
    width: {
      xs: '8.5em'
    },
    margin: '1em'
  }

  const stackForm = {
    background: 'white',
    borderRadius: '5px',
  }
