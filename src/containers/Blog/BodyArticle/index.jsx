import React, {useState, useEffect} from "react";
import { Box, Typography, Card, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BodyArticle = (props) => {

    const [img, setImg] = useState([])
    const [autor, setAutor] = useState([])
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])
    const [dataArray, setDataArray] = useState([])
    const navigate = useNavigate();
    const {
        title = props.itemId
    } = props

    async function getBlog() {
        const validate = {
            title: title,
        }
        const res = await axios.post('http://localhost:80/api/blog/get', validate);
        try {
          if(res.status === 200){
            const { img, autor, date, time, dataArray} = res.data;
            setImg(img);setAutor(autor);setDate(date);setTime(time);setDataArray(dataArray)
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
            <Typography sx={stackTitle}>{title}</Typography>
            <img src={img} alt="img principal" width="700" heigth="420" />
            <Box sx={stackBox1}>
              <Card sx={stackCard}>
                <Typography sx={stackTyCard}>{autor}</Typography>
                <Box sx={{display:'flex'}}>
                  <Typography sx={stackTyCard}>{date} |</Typography>
                  <Typography sx={stackTyCard}>| {time}</Typography>
                </Box>
              </Card>
            </Box>
            <Box sx={stackBox2}>
            {dataArray ? (
                    (() => {
                    const itemBoxes = [];
                    for (let i = 0; i < dataArray.length; i++) {
                        const match = dataArray[i];
                        if (match.startsWith('title::')) {
                          const [, title] = match.split('::');
                          console.log(`Title: ${title}`);
                        }
                        else if (match.startsWith('img::')) {
                          const [, img] = match.split('::');
                          itemBoxes.push(<Box key={i} sx={stackBoxCenter}><img  src={img} width="640" height="400" alt="img secundary"/></Box>);
                        }
                        else if(match.startsWith("imgL::")){
                          const [, href, img, link] = match.split('::');
                          itemBoxes.push(
                          <Box key={i} sx={stackBoxSell}>
                            <Button onClick={() => window.open(href)}><img src={img} alt="publi"/></Button>
                            <Button onClick={() => window.open(link)} sx={stackButtonBuy}>Comprar en Amazon</Button>
                          </Box>
                          );
                        }
                        else if(match.startsWith("br/")){
                          itemBoxes.push(<br key={i}/>);
                        }
                        else {
                            itemBoxes.push(<Typography sx={stackTyText} key={i}>{match}</Typography>);
                        }
                    }
                    return itemBoxes;
                    })()
                ) : (
                    <div>No items to display</div>
                )}
            </Box>
        </Box>
    )
}

export default BodyArticle;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: {
      xl: '1em'
    }
}

const stackBox1 = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: {
    xs: '35%'
  }
}

const stackBox2 = {
  width: '35%'
}

const stackBoxCenter = {
  display: 'flex',
  justifyContent: 'center',
  margin: '1em'
}

const stackBoxSell = {
  display: 'flex',
  justifyContent: 'center'
}

const stackCard = {
  background: '#242526',
  padding: '0.5em',
  margin: '1em 0',
  width: {
    xs: '11em'
  }              
}

const stackButtonBuy = {
  margin: 'auto 2em',
  maxWidth: '7.5em',
  textAlign: 'center',
  border: 'solid 1px white',
  color: 'white'
}

const stackTitle = {
  maxWidth: {
    xs: '42.5'
  },
  marginBottom: {
    xs: '15px'
  },
  fontSize: {
    xs: '34px'
  }
}

const stackTyCard = {
  color: 'white',
  fontSize: {
    xs: '22px'
  }
}

const stackTyText = {
  fontSize: '26x',
  textAlign: 'justify'
}