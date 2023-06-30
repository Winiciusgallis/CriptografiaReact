import React, { useState } from 'react';
import './App.css';

function resultMorse(texto: string) {
  const morseCode = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
    I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
    Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
    Y: '-.--', Z: '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
    '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
    '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
  };

  const result = texto.toUpperCase().split(" ").map(word => (
    word.split("").map(char => morseCode[char] ?? char).join(" ")
  )).join(" / ");
  return result;
}

function resultMorse2(texto: string) {
  const morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G',
    '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N',
    '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U',
    '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0',
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6',
    '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?',
    '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
    '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
    '.-..-.': '"', '...-..-': '$', '.--.-.': '@', '/': ' '
  };

  const result = texto.split(" / ").map(word => (
    word.split(" ").map(char => morseCode[char] ?? char).join("")
  )).join(" ");
  return result;
}

function Criptografia() {
  const [mensagemOriginal, setMensagemOriginal] = useState('');
  const [mensagemCriptografada, setMensagemCriptografada] = useState('');
  const [mensagemDescriptografada, setMensagemDescriptografada] = useState('');

  const criptografar = () => {
    const textoCriptografado = resultMorse(mensagemOriginal);
    setMensagemCriptografada(textoCriptografado);
    setMensagemDescriptografada(''); 
  };

  const descriptografar = () => {
    const textoDescriptografado = resultMorse2(mensagemCriptografada);
    setMensagemOriginal(textoDescriptografado);
    setMensagemDescriptografada(textoDescriptografado); 
    setMensagemCriptografada(''); 
    setMensagemOriginal('')
  };

  const apagar = () => {
    setMensagemOriginal('');
    setMensagemCriptografada('');
    setMensagemDescriptografada(''); 
  };

  return (
    <div className='fundo'>
      <div className="Criptografia">
        <h2>Criptografia de Código Morse:</h2>
        <div className="input-group">
          <label htmlFor="mensagemOriginal">Escreva a palavra para ser criptografada</label>
          <input
            id="mensagemOriginal"
            type="text"
            value={mensagemOriginal}
            onChange={(e) => setMensagemOriginal(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="mensagemCriptografada">Mensagem Criptografada:</label>
          <input
            id="mensagemCriptografada"
            type="text"
            value={mensagemCriptografada}
            readOnly
          />
        </div>

        <div className="input-group">
          <label htmlFor="mensagemDescriptografada">Mensagem Descriptografada:</label>
          <input
            id="mensagemDescriptografada"
            type="text"
            value={mensagemDescriptografada}
            readOnly
          />
        </div>

        <button onClick={criptografar}>Criptografar</button>
        <button onClick={descriptografar}>Descriptografar</button>
        <button onClick={apagar}>Apagar</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Criptografia />
    </div>
  );
}

export default App;
