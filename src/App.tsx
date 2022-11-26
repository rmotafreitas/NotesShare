import "./styles/main.css";
import { useId } from "react";

import { FeatureCard } from "./components/CardFeature";
import { Header } from "./components/Header";
import { Title } from "./components/TItle";
import { Footer } from "./components/Footer";
import { CardNew } from "./components/CardNew";
import { CardMember } from "./components/CardMember";
import { PreviewPhone } from "./components/PreviewPhone";

import { FEATURES } from "./utils/Features";
import { NEWS } from "./utils/News";
import { TEAM_MEMBERS } from "./utils/TeamMembers";
import { PREVIEW_SCREENS } from "./utils/PreviewScreens";
import { Download } from "./components/Download";
import { DICTIONARY_TITLES } from "./utils/Dictionary.titles";

const LANG = "pt";

function App() {
  return (
    <>
      <Header />
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
        <Title title="Pré Visualização" />
        <div className="flex flex-wrap justify-center p-10">
          {PREVIEW_SCREENS.map(({ title, image }) => (
            <PreviewPhone title={title} image={image} />
          ))}
        </div>
      </section>

      <section className="py-8 m-0 flex flex-col items-center" id="team">
        <Title title="A Nossa Equipa" />
        <div className="grid grid-cols-2 max-md:flex max-md:flex-wrap max-md:justify-center place-items-center gap-x-5 gap-y-2 container mx-auto">
          {TEAM_MEMBERS.map(({ name, age, role, hobby, mail, photo }) => (
            <CardMember
              key={useId()}
              name={name}
              age={age}
              role={role}
              hobby={hobby}
              mail={mail}
              photo={photo}
            />
          ))}
        </div>
      </section>

      <Download />

      <section className="py-8" id="news">
        <Title title="Novidades" />
        <div className="flex flex-row justify-center gap-8">
          {NEWS.map(({ title, description, image, date }) => (
            <CardNew
              key={useId()}
              date={date}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
