import  { useState } from 'react';
import styles from "./Contacto.module.css";

export const Contacto = () => {
  
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí podrías manejar el envío del formulario, por ejemplo, enviarlo a un servidor
      console.log('Formulario enviado:', { name, email, message, number });
      // Resetear el formulario
      setName('');
      setEmail('');
      setMessage('');
      setNumber('');
    };
  
  return (
    <div className={styles.contacto }>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input className={styles.inputNombre}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
          className={styles.inputNombre}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Numero:</label>
          <input
          className={styles.inputNombre}
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
          className={styles.inputNombre}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className={styles.boton} type="submit">Enviar</button>
      </form>
    </div>
  )
}

