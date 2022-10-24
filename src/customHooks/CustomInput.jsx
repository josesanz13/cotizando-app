import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';

function CustomInput({obligatorio, id, label, }) {
    const [customInput, setCustomInput] = useState('');
    return (  
        <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
                required
                id="usuario-login"
                label="Usuario"
                value={usuario}
                onChange={handleChange}
            />
        </FormControl>
    );
}

export default CustomInput;