import FileZone from './Components/FileZone'
import {useState} from 'react'
import './App.css';


function App() {

  const [length, setLength] = useState()
  const [isOpenTrans, setIsOpenTrans] = useState(false)
  const [isOpenPair, setIsOpenPair] = useState(false)
  const [valueTrans, setValueTrans] = useState('Тип перекладу')
  const [valuePairs, setValuePairs] = useState('Мовна пара')
  const [sumTrans, setSumTrans] = useState(1)
  const [sumPairs, setSumPairs] = useState(0)
  const arrTrans = [
    {
      id : 1,
      title: 'Тип перекладу'
    },
    {
      id : 2,
      title: 'Присяжний',
      chars: 1125
    },
    {
      id : 3,
      title: 'Звичайний',
      chars: 1800
    }
  ]

  const arrPairsPris = [
    {
      id : 1,
      title: 'Мовна пара'
    },
    {
      id : 2,
      title: 'Пол-англ присяжний',
      price: 100
    },
    {
      id : 3,
      title: 'Пол-укр присяжний',
      price: 110
    }
  ]

  const arrPairs = [
    {
      id : 1,
      title: 'Мовна пара'
    },
    {
      id : 2,
      title: 'Пол-англ',
      price: 70
    },
    {
      id : 3,
      title: 'Пол-укр',
      price: 90
    }
  ]

  function onClickTrans(item) {
    setValueTrans(item.title)
    setIsOpenTrans(!isOpenTrans)
    setValuePairs('Мовна пара')
    setSumTrans(item.chars)
  }

  function onClickPairs(item) {
    setValuePairs(item.title)
    setIsOpenPair(!isOpenPair)
    setSumPairs(item.price)
  }


  return (
    <div className="App">
      <FileZone setLength={setLength}></FileZone>
      <div className='app__chars'>Кількість символів: {length}</div>
      <div className='app__selector-wrapper'>

        <div className='app__selector'>
          <div onClick={() => setIsOpenTrans(!isOpenTrans)} className={`app__option-main + ${isOpenTrans ? 'is-open-main' : ''}`}>{valueTrans}</div>
          {isOpenTrans &&  
            <div className='app__options'>
              {arrTrans.map(item =>
                <div onClick={() => onClickTrans(item)} key={item.id} className={`app__option + ${item.id === 3 ? 'is-open' : ''}`}>{item.title}</div>)}
            </div>}
        </div> 
    
        {valueTrans !== 'Тип перекладу' && <div className='app__selector'>
          <div onClick={() => setIsOpenPair(!isOpenPair)} className={`app__option-main + ${isOpenPair ? 'is-open-main' : ''}`}>{valuePairs}</div>
            {isOpenPair &&  
              <div className='app__options'>
                {valueTrans === 'Присяжний' && arrPairsPris.map(item =>
                  <div onClick={() => onClickPairs(item)} key={item.id} className={`app__option + ${item.id === 3 ? 'is-open' : ''}`}>{item.title}</div>)}
              </div>}
            {isOpenPair &&  
            <div className='app__options'>
              {valueTrans === 'Звичайний' && arrPairs.map(item =>
                <div onClick={() => onClickPairs(item)} key={item.id} className={`app__option + ${item.id === 3 ? 'is-open' : ''}`}>{item.title}</div>)}
            </div>}
        </div>}
      </div>
      
      <div className='app__sum'>{`Сума: ${length ? Math.ceil(length / sumTrans * sumPairs) : '0'}`}</div>

    </div>
  );
}

export default App;
