import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

export default function OneNews({ thisNew }) {

    const { urlToImage, url, title, description, source } = thisNew
    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={200}
                    />
                )}

                <CardContent>
                    <Typography variant='body' color='error'>
                        {source.name}
                    </Typography>

                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>

                    <Typography variant='body2' component='div'>
                        {description}
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
