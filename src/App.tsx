import "./styles/main.css";
import { useId, useMemo, useState } from "react";

import { FeatureCard } from "./components/CardFeature";
import { HeroSection } from "./components/HeroSection";
import { Title } from "./components/TItle";
import { Footer } from "./components/Footer";
import { CardNew } from "./components/CardNew";
import { CardMember } from "./components/CardMember";
import { PreviewPhone } from "./components/PreviewPhone";

import { FEATURES } from "./utils/Features";
import { NEWS } from "./utils/News";
import { TEAM_MEMBERS } from "./utils/TeamMembers";
import { PREVIEW_SCREENS } from "./utils/PreviewScreens";
import { DownloadSection } from "./components/DownloadSection";
import { DICTIONARY_TITLES } from "./utils/Dictionary.titles";

import { LangContext, LangContextProps } from "./contexts/Lang.context";
import { DEFAULT_LANG } from "./utils/Config.import";

import { ScrollToTopButton } from "./components/ScrollToTopButton";

function App() {
  const lang = localStorage.getItem("lang") || DEFAULT_LANG;

  const [LANG, setLANG] = useState<string>(lang); // Initial Value of the context of language context

  const providerLang = useMemo<LangContextProps>(
    () => ({ LANG, setLANG }),
    [LANG, localStorage.setItem("lang", LANG)]
  );

  return (
    <LangContext.Provider value={providerLang}>
      <div>
        <HeroSection />

        <section className="py-8" id="features">
          <Title title={DICTIONARY_TITLES.FEATURES[LANG]} />
          <div className="flex justify-center flex-wrap p-10">
            {FEATURES.map(({ title, icon, description }) => (
              <FeatureCard
                key={useId()}
                title={title[LANG]}
                icon={icon}
                description={description[LANG]}
              />
            ))}
          </div>
        </section>

        <section className="py-8" id="preview">
          <Title title={DICTIONARY_TITLES.PREVIEW[LANG]} />
          <div className="flex flex-wrap justify-center p-10">
            {PREVIEW_SCREENS.map(({ title, image }) => (
              <PreviewPhone title={title} image={image} />
            ))}
          </div>
        </section>

        <section className="py-8 m-0 flex flex-col items-center" id="team">
          <Title title={DICTIONARY_TITLES.OURTEAM[LANG]} />
          <div className="grid grid-cols-2 max-md:flex max-md:flex-wrap max-md:justify-center place-items-center gap-x-5 gap-y-2 container mx-auto">
            {TEAM_MEMBERS.map(({ name, age, role, hobby, mail, photo }) => (
              <CardMember
                key={useId()}
                name={name}
                age={age}
                role={role[LANG]}
                hobby={hobby[LANG]}
                mail={mail}
                photo={photo}
              />
            ))}
          </div>
        </section>

        <DownloadSection />

        <section className="py-8" id="news">
          <Title title={DICTIONARY_TITLES.NEWS[LANG]} />
          <div className="flex flex-row justify-center gap-8">
            {NEWS.map(({ title, description, image, date }) => (
              <CardNew
                key={useId()}
                date={date}
                title={title[LANG]}
                description={description[LANG]}
                image={image}
              />
            ))}
          </div>
        </section>

        <ScrollToTopButton />

        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
