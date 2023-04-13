import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
]

const COUNTRIES = [
  { value: 'us', label: 'Estados Unidos' },
  { value: 'es', label: 'España' },
  { value: 've', label: 'Venezuela' },
  { value: 'mx', label: 'Mexico' },
  { value: 'co', label: 'Colombia' },
  { value: 'fr', label: 'Francia' },
  { value: 'pt', label: 'Portugal' },
]

export default function Formulario() {

  const { category, handleChangeCategory, handleChangeCountry, country } = useNoticias()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIAS.map(categoria => (
            <MenuItem
              key={categoria.value}
              value={categoria.value}
            >
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
      fullWidth
      sx={{
        marginTop:5
      }}
      >
        <InputLabel>País</InputLabel>
        <Select
          label="País"
          onChange={handleChangeCountry}
          value={country}
        >
          {COUNTRIES.map(countryx => (
            <MenuItem
              key={countryx.value}
              value={countryx.value}
            >
              {countryx.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </form>
  )
}
