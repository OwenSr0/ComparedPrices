import React, {useState, useEffect} from "react";
import { Box, Typography, Card, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'

const BodyArticle = (props) => {

    const [img, setImg] = useState([])
    const [autor, setAutor] = useState([])
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])
    const [dataArray, setDataArray] = useState([])
    const navigate = useNavigate();
    const {
        title = props.itemId,
        region = props.region
    } = props

      useEffect(()=>{
        async function getBlog() {
          const validate = {
              title: title,
              boolean: true
          }
          const res = await axios.post('https://backend.comparo.land/api/blog/get', validate);
          try {
            if(res.status === 200){
              const { img, autor, date, time, dataArray} = res.data;
              setImg(img);setAutor(autor);setDate(date);setTime(time);setDataArray(dataArray)
            } else{
              navigate(`/${region}/blog`)
            }
          } catch (error) {
            console.log(error);
          }
        }
        getBlog()
        },[navigate, title, region])

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTitle}>{title}</Typography>
            <img src={img} alt="img principal" id="mainImg"/>
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
                          //const [, title] = match.split('::');
                        }
                        else if (match.startsWith('img::')) {
                          const [, img] = match.split('::');
                          itemBoxes.push(<Box key={i} sx={stackBoxCenter}><img  src={img} width="640" height="400" alt="img secundary" id="imgPhotos"/></Box>);
                        }
                        else if(match.startsWith("imgL::")){
                          const [, href, img, ads, link] = match.split('::');
                          itemBoxes.push(
                          <Box key={i} sx={stackBoxSell}>
                            <Button onClick={() => window.open(href)}><img src={img} alt="publi" id="imgPubli"/></Button>
                            <img src={ads} alt="ad" />
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
      xs: '1.5em',
      sm: '1em'
    }
}

const stackBox1 = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: {
    sm: '25em',
    md: '22.5em',
    lg: '27.5em',
    xl: '22.5em'
  }
}

const stackBox2 = {
  width: {
    xs: '15em',
    sm: '25em',
    md: '22.5em',
    lg: '27.5em',
    xl: '22.5em'
  }
}

const stackBoxCenter = {
  display: 'flex',
  justifyContent: 'center',
  margin: '1em'
}

const stackBoxSell = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '0.5em'
}

const stackCard = {
  background: '#242526',
  padding: '0.5em',
  margin: '1em 0',
  width: "auto"      
}

const stackButtonBuy = {
  margin: 'auto 2em',
  maxWidth: {
    xs: '8.5em',
    sm: '7.5em'
  },
  textAlign: 'center',
  border: 'solid 1px white',
  color: 'white',
  fontSize: {
    xs: '8px',
    sm: '18px'
  }
}

const stackTitle = {
  textAlign: 'center',
  maxWidth: {
    xs: '15em',
    sm: '22.5em',
    lg: '42.5%'
  },
  marginBottom: {
    xs: '15px'
  },
  fontSize: {
    xs: '18px',
    sm: '28px',
    lg: '28px',
    xl: '34px'
  }
}

const stackTyCard = {
  color: 'white',
  fontSize: {
    xs: '14px',
    sm: '18px',
  }
}

const stackTyText = {
  fontSize: {
    xs: '15px',
    sm: '24px'
  },
  textAlign: 'justify'
}