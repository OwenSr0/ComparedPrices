import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const BlogAddBody = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const itemId = query.get('q');

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [resume, setResume] = useState('');
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');
    const [id, setId] = useState('');

    async function addBlog() {
        if (!title || !resume || !autor || !date || !time || !data) {
            alert('Rellena todos los campos');
            return false;
        }
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
        try {
          if(res.status === 200){
            navigate(`/blog?q=${title}`);
          }
          
        } catch (error) {
          console.log(error);
        }
      }

    async function putArticle(){
        const validate = {
            title: title,
            img: img,
            resume: resume,
            autor: autor,
            date: date,
            time: time,
            data: data,
            id: id
        }
        const res = await axios.put('http://localhost:80/api/blog/edit', validate);
        try {
            console.log(res.status)
            if(res.status === 200){
                navigate(`/blog?q=${title}`);
              }        
        } catch (error) {
                console.log(error);
              }
    }

    async function deleteArticle(){
        const res = await axios.delete('http://localhost:80/api/blog/delete/' + id);
        try {
            console.log(res.status)
            if(res.status === 200){
                navigate(`/blog`);
              }
        } catch (error) {
                console.log(error);
              }
    }

      useEffect(()=>{
        async function getArticle(){
            const validate = {
                title: itemId,
                boolean: false
            }
            const res = await axios.post('http://localhost:80/api/blog/get', validate);
            try{
                if(res.status === 204){
                    navigate(`/blog`);
                } else if( res.status === 200){
                    const { title, img, autor, date, time, resume, data, _id} = res.data;
                    setTitle(title);setImg(img);setAutor(autor);setDate(date);setTime(time);setResume(resume);setData(data);setId(_id);
                }
            } catch (error) {
                console.log(error);
              }
        }

        if (itemId !== null && !title) {
            getArticle()
        }
    },[ navigate, itemId, title])

    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Button variant="contained" color="error" onClick={deleteArticle}>Eliminar</Button>
                <Button variant="contained" color="warning"  onClick={putArticle}>Editar</Button>
                <Button variant="contained" color="success" onClick={addBlog}>Guardar</Button>
            </Box>
            <Box sx={stackText1}>
                <FormControl sx={stackForm} variant="filled">
                    <InputLabel style={{ fontSize: '20px', color: 'gray', top: '-5px'}}>Titulo</InputLabel>
                    <FilledInput style={{ fontSize: '18px',}}
                    value={title}
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
                    value={img}
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
                        value={autor}
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
                        value={date}
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
                        value={time}
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
                    rows={6}
                    variant="standard"
                    value={resume}
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
                    value={data}
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
