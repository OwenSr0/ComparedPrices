import React from "react";
import { Box, Typography, NativeSelect  } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const SortFilter = () => {

        const [category, setCategory] = React.useState('all');

        const handleChange = (event) => {
            setCategory(event.target.value);
          console.log(category)
        };
       

    return(
        <Box sx={stackStyle}>
            <Typography>Filter by</Typography>
            <FormControl sx={stackDrop}>
                    <NativeSelect sx={stackNative}
                    placeholder="All"
                    value={category}
                    onChange={handleChange}
                    >
                        <option value={'all'}>All</option>
                        <option value={'empty'}>empty</option>
                        <option value={'empty'}>empty</option>
                    </NativeSelect>
            </FormControl>
        </Box>
    )
}

export default SortFilter;

const stackStyle = {
    display: 'flex',
    borderRadius: '20px',
    margin: '0 2em 0 2em'

}

const stackDrop = {
    background: 'white',
    width: '8em',
    height: '43px',
    marginLeft: '1em'
    
}

const stackNative = {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '10px'
}