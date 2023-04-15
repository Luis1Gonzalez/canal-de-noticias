import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
  { value: 'all', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'world', label: 'Mundo' },
  { value: 'politic', label: 'Política' },
  { value: 'startup', label: 'Startups' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'micellaneous', label: 'Varios' },
  { value: 'hatke', label: 'Hatke' },
  { value: 'health', label: 'Salud' },
  { value: 'automobile', label: 'Automoviles' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
]

export default function Formulario() {

  const { category, handleChangeCategory } = useNoticias()

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
      
    </form>
  )
}
