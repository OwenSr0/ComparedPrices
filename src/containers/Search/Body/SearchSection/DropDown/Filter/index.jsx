import React from "react";
import { Box, Typography, NativeSelect  } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const SortFilter = () => {

        const [category, setCategory] = React.useState('all');

        const handleChange = (event) => {
            setCategory(event.target.value);
        };
       

    return(
        <Box sx={stackStyle}>
            <Typography sx={stackTy}>Filter by</Typography>
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
    margin: {
        xs: '0 1em 0 1em',
        lg: '0 1em 0 1em',
        xl: '0 2em 0 2em'
    }

}

const stackDrop = {
    background: 'white',
    width: {
        sm: '7em',
        lg: '8em'
    },
    height: {
        xs: '2em',
        sm: '43px'
    },
    marginLeft: '1em',
    borderRadius: '15px',
}

const stackNative = {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '10px',
    fontSize: {
        xs: '18px',
        sm: '24px'
    }
}

const stackTy = {
    fontSize: {
        xs: '18px',
        sm: '24px'
    }
}