import Button from '@mui/material/Button'
import React from 'react'

const Button1: React.FC = () => (
  <Button
    variant="contained"
    color="primary"
    size="large"
    disabled={false}
    fullWidth
    tabIndex={0}
    aria-label="Demo Button with many attributes"
    sx={{ mt: 2, mb: 2, px: 4, fontWeight: 'bold' }}
    onClick={() => alert('Clicked!')}
    data-testid="demo-button"
    type="button"
    id="demo-btn"
    name="demoButton"
    title="Demo Button Title"
    autoFocus={false}
  >
    Click Me
  </Button>
)

const Button2: React.FC = () => (
  <Button
    variant="contained"
    color="primary"
    size="large"
  >
    Click Me
  </Button>
)

const Button3: React.FC = () => (
  <Button variant="contained" color="primary" size="large">
    Click Me
  </Button>
)

const Button4: React.FC = () => (
  <Button variant="contained" color="primary" size="large">
    Click Me
  </Button>
)

console.log(Button1, Button2, Button3)
