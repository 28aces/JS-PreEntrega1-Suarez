const correctPassword = 'coderhouse';
const maxAttempts = 3;
let attempts = 0;

while (attempts < maxAttempts) {
  const userPassword = prompt('Ingresa tu contraseña para continuar:');
  
  // Valida la contraseña, y si es correcta, muestra un mensaje de éxito y sale del bucle
  if (userPassword === correctPassword) {
    alert('Contraseña correcta!');
    break;
  } else {
    
    // Incrementa el contador de intentos
    attempts++;
    
    // Valida si la contraseña es correcta o no, y da una pista al usuario de cuántos caracteres coinciden en la posición correcta
    let matchCount = 0;
    for (let i = 0; i < userPassword.length && i < correctPassword.length; i++) {
      if (userPassword[i] === correctPassword[i]) {
        matchCount++;
      }
    }
    
    //Si la contraseña es incorrecta, muestra un mensaje de error y vuelve a pedir la contraseña
    alert(`Contraseña incorrecta. Te quedan ${maxAttempts - attempts} intentos.\n${matchCount} caracteres coinciden en la posición correcta.`);
  }
}

// Si el bucle se ejecuta 3 veces, muestra un mensaje de error
if (attempts === maxAttempts) {
  alert('Contraseña bloqueada. Has superado el número de intentos.');
}
