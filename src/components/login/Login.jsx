import { Card, CardContent, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Box, Button, OutlinedInput } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import './login.css';
import { Container } from '@mui/system';

function Login() {
	const [loading, setLoading] = useState(false);
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	
	const handleChange = ( e ) => {
		const value = e.target.value;

		if (e.target.id === 'password-login') {
			setPassword(value);
		}

		if (e.target.id === 'usuario-login') {
			setUsuario(value);
		}
	}

	const handleClick = () => {
		setLoading(true);
	}

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100vh'
				  }}
			>
				<Container maxWidth="sm" className='login-container' >
					<Card sx={{'padding' : '3rem 1rem 3rem 1rem', 'border-radius' : '10px' }}>
						<CardContent>
							<form>
								<FormControl fullWidth sx={{ mt:4 }} >
									<TextField
										required
										id="usuario-login"
										label="Usuario"
										value={usuario}
  										onChange={handleChange}
										className='customInput'
									/>
								</FormControl>
								<FormControl fullWidth sx={{ mt:4 }}>
									<TextField
										id="password-login"
										label="Password"
										type="password"
										value={password}
  										onChange={handleChange}
										className='customInput'
									/>
								</FormControl>
								<FormControl fullWidth sx={{ mt:3 }}>
									<LoadingButton
										onClick={handleClick}
										loading={loading}
										variant="contained"
										size='large'
										sx={{ 'border-radius' : '10px', p:'10px' }}
									>
									Login
									</LoadingButton>
								</FormControl>
							</form>
						</CardContent>
					</Card>
				</Container>
			</Box>
		</>
	);
}

export default Login;