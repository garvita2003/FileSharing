import './App.css';
import back from './background.png';
import { useRef } from 'react'; //virtual DOM
import { useState } from 'react'; //hook
import { useEffect } from 'react'; //to do api call
import { uploadFile } from './services/api';

function App() {

  const [file,setFile] = useState('');
  const [result,setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data); //api
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  console.log(file);

  return (
    <div className="container">
      <img src={back} alt="banner" />
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and Share the download Link.</p>
        <button onClick={() => onUploadClick()}>Upload File</button>
        <input type="file"
          ref={fileInputRef}
          style={{display: 'none'}}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} >{result}</a>
      </div>
    </div>
  );
}

export default App;
