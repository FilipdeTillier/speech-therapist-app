import { FormattedMessage, IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import flat from "flat";
import { Button } from "@mui/material";

import { Language } from "./common/interfaces/Language";
import Polish from "./lang/pl.json";
import English from "./lang/en.json";

import "./App.scss";
import { Router } from "./Routes/Router";

const languages = {
  [Language.POLISH]: Polish,
  [Language.ENGLISH]: English,
};

const { REACT_APP_LANGUAGE = Language.POLISH } = process.env;

function App() {
  const [lang, setLang] = useState<Language>(REACT_APP_LANGUAGE as Language);
  const [locale, setLocale] = useState(languages[lang]);

  useEffect(() => {
    setLocale(languages[lang]);
  }, [lang, setLocale]);

  return (
    <IntlProvider locale={REACT_APP_LANGUAGE} messages={flat(locale)}>
      <FormattedMessage id="appName" />
      <div className="App">
        <Button
          variant="text"
          onClick={() =>
            lang === Language.POLISH
              ? setLang(Language.ENGLISH)
              : setLang(Language.POLISH)
          }
        >
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Router />
      </div>
    </IntlProvider>
  );
}

export default App;
