import React, { useState, useEffect } from 'react';

import { convertToPDF } from './api';
import { blobToBase64 } from './utils/blobToBase64';

import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import SavedPDFItem from './components/SavedPDFItem/SavedPDFItem';
import PDFViewer from './components/PDFViewer/PDFViewer';

import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [value, setValue] = useState('');
  const [PDF, setPDF] = useState();
  const [allPDFs, setAllPDFs] = useState([]);

  useLocalStorage("saveData", setAllPDFs);

  const handleChangeValue = (e) => setValue(e.target.value)

  const onHandleClick = () => convertToPDF(value)
    .then((response) => {
      const { data } = response
      blobToBase64(data).then(res => {
        setPDF(res)
        setAllPDFs((prevState) => [...prevState, res])
      })
    }).catch((error) => {
      console.log(error)
      alert(error)
    })

  useEffect(() => {
    if (!allPDFs.length) return;

    localStorage.setItem("saveData", JSON.stringify(allPDFs))
  }, [allPDFs])

  return (
    <div className='flex flex-col items-center max-w-screen-xl my-4 mx-auto'>
      <h1 className='text-3xl font-bold'>Frontend Test Task</h1>
      <div className='flex gap-6 w-full p-8 h-full'>
        <div className='flex-1'>
          <Textarea value={value} onChange={handleChangeValue} />
          <Button onClick={onHandleClick} />
          <div className='my-8'>
            <h2 className='text-xl font-bold'>Збережені файли</h2>
            <div className='mt-8'>
              {allPDFs?.map((PDF, index) =>
                <SavedPDFItem key={index} idx={index} onClick={() => setPDF(PDF)} />)}
            </div>
          </div>
        </div>
        <div className="bg-[#dedede] p-12 flex-1 h-5/6">
          <PDFViewer PDF={PDF} />
        </div>
      </div>
    </div>
  );
}

export default App;
