import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
  { value: 'all', label: 'All' },
  { value: 'business', label: 'Business' },
  { value: 'world', label: 'World' },
  { value: 'politic', label: 'Politic' },
  { value: 'startup', label: 'Startups' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'micellaneous', label: 'Micellaneous' },
  { value: 'hatke', label: 'Hatke' },
  { value: 'health', label: 'Health' },
  { value: 'automobile', label: 'Automobile' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
]

export default function Formulario() {

  const { category, handleChangeCategory } = useNoticias()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
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
