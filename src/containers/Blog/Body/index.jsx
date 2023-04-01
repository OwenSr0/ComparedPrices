import React from "react";
import { Box } from '@mui/material';
import BlogCard from './Card/index';

const BodyBlog = (props) => {

    const {
        items = props.items
    } = props

    return(
        <Box sx={stackStyle}>
            {items ? (
                    (() => {
                        const itemBoxes = [];
                        for (let item in items) {
                            const Item = items[item]
                            itemBoxes.push(<BlogCard key={item} item={Item}></BlogCard>);
                        }
                        return itemBoxes;
                        })()
                ) : (
                    <div>No items to display</div>
                )}
            
        </Box>
    )
}

export default BodyBlog;

const stackStyle = {
    display: 'flex',
    justifyContent: 'center'
}