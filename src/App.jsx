import { useEffect, useState } from 'react'
import logo from './assets/images/logo.svg'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!(bill > 0 && people > 0 && tip > 0)) {
      return
    }

    setCalculatedTip(bill * (tip / 100))
    setTotal(calculatedTip + bill)
  }, [bill, tip, people, calculatedTip])

  const handleReset = () => {
    setBill('')
    setTip('')
    setPeople('')
    setCalculatedTip(0)
    setTotal(0)
  }

  return (
    <div className='wrapper'>
      <img src={logo} alt='Splitter logo' />
      <div className='container'>
        <Form
          bill={bill}  
          setBill={setBill}
          tip={tip}  
          setTip={setTip}
          people={people}  
          setPeople={setPeople}
        />
        <Display 
          total={total}
          calculatedTip={calculatedTip} 
          people={people}
          handleReset={handleReset}
        />
      </div>
    </div>
  )
}

export default App
