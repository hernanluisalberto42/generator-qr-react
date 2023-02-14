import './App.css';
import React,{useState} from 'react'
import QrCode from 'qrcode'
import ChromePicker from 'react-color'

function App() {

  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [error, seterror] = useState(false)
  

  const GenerateQr=()=>{
    if(text.trim()===''){
      seterror(true)
      return;
    }
    seterror(false);
    QrCode.toDataURL(text,(err,text)=>{
           if(err) return console.log(err)

           console.log(text)
           setQrCode(text)
    })
    setText("");
  }

  return (
    <div className="App">
          <h1>Generador de QR</h1>
          <input
            type="text"
            placeholder='ejemplo http://www.google.com'
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />          
          <button
            onClick={()=>GenerateQr()}
          >Generar</button>
          {error?<p>Debes escribir algo</p>:null}
           {qrCode && <>
              <img src={qrCode} alt="text"/>
              <a href={qrCode} download="qrCode.png">Descargar</a>
           </>}
    </div>
  );
}

export default App;
