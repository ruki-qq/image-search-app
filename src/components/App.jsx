import React, { useState } from "react";
import Search from "./Search";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ImagesList from "./ImagesList";

function App() {
  const [inputText, setInputText] = useState("");
  const [urls, setUrls] = useState();

  const handleInput = (event) => {
    const text = event.target.value;
    setInputText(text);
  };
  const parseUrls = (urls) => {
    const imgUrls = urls.data.results.map((element) => {
      return { small: element.urls.small, full: element.urls.full };
    });
    setUrls(imgUrls);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Search
          inputText={inputText}
          handleInput={handleInput}
          parseUrls={parseUrls}
        />
        {urls && <ImagesList urls={urls} />}
      </Container>
    </React.Fragment>
  );
}

export default App;
