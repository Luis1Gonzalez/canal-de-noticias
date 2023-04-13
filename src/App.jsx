import { Container, Grid, Typography } from '@mui/material'
import { NoticiasProvider } from './context/NoticiasProvider'
import Form from './components/form'
import NewsList from './components/NewsList'

function App() {


  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction='row'
          justifyContent='center'
          alignContent='center'
        >{/* El primer grid solo avisa que viene la estructura de un grid, asi que hay q poner los dos minimo. */}
          <Grid item xs={12} md={6} lg={4}>
            {/* este item obedece al fullWidth del Form.jsx */}
            <Form />
          </Grid>
        </Grid>

        <NewsList />

      </Container>
    </NoticiasProvider>
  )
}

export default App
