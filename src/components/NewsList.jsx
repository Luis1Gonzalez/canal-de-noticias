import React from 'react'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import useNoticias from '../hooks/useNoticias'
import OneNews from './OneNews'




export default function NewsList() {

    const { news } = useNoticias()
    

// Math.cel redondea siempre hacia arriba.

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Lo mas Destacado
            </Typography>

            <Grid
            container
            spacing={2}
            >

                {news?.map(thisNew => (
                    <OneNews
                        key={thisNew.url}
                        thisNew={thisNew}
                    />
                ))}


            </Grid>

        </>
    )
}
