import './App.css';
import React, { useEffect, useState } from "react";
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import List from './components/list';
import List2 from './components/list2';
import withListLoading from './components/withListLoading';
import "bootstrap/dist/css/bootstrap.css";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedOption, setHighlightedOption] = useState("");

  const Data = [];

  const ListLoading = withListLoading(List);
  const ListLoading2 = withListLoading(List2);

  const [appState, setAppState] = useState({
    loading: false,
    repos: "",
    devices: [],
    feelings: []
  });


  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://pfi-back.herokuapp.com/apiPFI/getAllFeelings`;
    // const apiUrl = 'http://localhost:47000/apiPFI/getAllFeelings';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        repos.forEach((item) => 
          {
            if (Data.indexOf(item.deviceId) === -1)
            {
              Data.push(item.deviceId)
            }
          });
        setAppState({ loading: false, repos: repos, devices: Data });

      });
  }, [setAppState]);
  return (
    <div className="body"> 
      <Header/>
      <header className="App-header">
      <div>
      {/* {<ListLoading isLoading={appState.loading} repos={appState.repos} />} */}
      {!appState.loading && <ComboBox
        options={appState.devices}
        placeholder="ID de Usuario"
        defaultIndex={4}
        optionsListMaxHeight={300}
        style={{
          width: "500px",
          margin: "0 auto",
          marginTop: "50px"
        }}
        focusColor="#20C374"
        renderOptions={(option) => (
          <div className="comboBoxOption">{option}</div>
        )}
        onSelect={(option) => setSelectedOption(option)}
        onChange={(event) => console.log(event.target.value)}
        enableAutocomplete
        onOptionsChange={(option) => setHighlightedOption(option)}
      />}
      </div>

      <p>
        ID del Juego: {" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {selectedOption.length > 0 ? selectedOption : "Sin Selección"}
        </span>
      </p>

      </header>
      <body className="App">
        <div className="App-Main" >
          <div className="App-Table jumbotron">
            {<ListLoading2 isLoading={appState.loading} repos={appState.repos} option={selectedOption.length > 0 ? selectedOption : "Ninguno"} />}
          </div>
        </div>
      </body>
      <Footer>Pildain - Sandor - 2021</Footer>
    </div>

  );
}

export default App;
