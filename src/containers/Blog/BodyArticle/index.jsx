import React, {useState, useEffect} from "react";
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BodyArticle = (props) => {

    const [body, setBody] = useState([])
    const navigate = useNavigate();
    const {
        title = props.itemId
    } = props

    async function getBlog() {
        const validate = {
            title: title
        }
        const res = await axios.post('http://localhost:80/api/blog/get', validate);
        try {
          if(res.status === 200){
            setBody(res.data.dataArray)
          } else{
            navigate('/blog')
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        getBlog()
        },[])

    return(
        <Box sx={stackStyle}>
            <Typography>
            {title}
            </Typography>
            <img src="" alt="" />
            {body ? (
                    (() => {
                    const itemBoxes = [];
                    for (let i = 0; i < body.length; i++) {
                        const match = body[i];
                        if (match.startsWith('title:')) {
                          const [, title] = match.split('::');
                          console.log(`Title: ${title}`);
                        } else if (match.startsWith('img:')) {
                          const [, img] = match.split('::');
                          <img src={img} width="320" height="200" />
                        } else {
                            itemBoxes.push(<Typography key={i}>{match}</Typography>);
                        }
                    }
                    return itemBoxes;
                    })()
                ) : (
                    <div>No items to display</div>
                )}
        </Box>
    )
}

export default BodyArticle;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}