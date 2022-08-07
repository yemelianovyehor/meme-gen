import * as React from 'react';
import Form from '@components/Form/Form';
import Result from '@components/Result/Result';
import Header from '@components/Header/Header';
import './App.css'

 
const App = () => {
  return ( 
    <div className="container">
      <Header/>
      <main>
        <Form />
        <Result />
      </main>
    </div>
   );
}
 
export default App;