import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

export default function OneNews({ thisNew }) {

    const { author, content, date, title, url, imageUrl, time  } = thisNew
    
    
    return (
        <Grid item md={6} lg={4}>
            <Card>
                {imageUrl && (
                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={imageUrl}
                        height={200}
                    />
                )}

                <CardContent>
                    
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>

                    <Typography variant='body2' component='div'>
                        {content}
                    </Typography>

                    <Typography variant='body'  color='error' marginTop={2} component='div'>
                        {author}
                    </Typography>

                    <Typography variant='body' color='error' component={'div'}>
                        {date}
                    </Typography>

                    <Typography variant='body' color='error' component={'div'}>
                        {time}
                    </Typography>

                    <CardActions>
                        <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign='center'
                        sx={{
                            textDecoration:'none'
                        }}
                        >
                        Leer Noticia
                        </Link>
                    </CardActions>
                </CardContent>

            </Card>
        </Grid>
    )
}
