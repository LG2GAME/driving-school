import { ContentWrapper, Wrapper } from "@components/layout";
import { TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";
import DesktopTeam from "./desktop-team/DesktopTeam";
import MobileTeam from "./mobile-team/MobileTeam";

import { images } from "@assets/images/images";
import { mq } from "@styles/theme.css";

export interface InstructorInterface {
  id: number;
  image: string;
  name: string;
  role: string;
  description: string;
}

const Team = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <Wrapper direction={isDesktop ? "row" : "column"} id="o-nas">
      <ContentWrapper>
        <TextBlock
          header="Nasz zespół"
          description="Nasz zespół to doświadczeni instruktorzy, którzy wspierają Cię na każdym etapie nauki. Dbamy o Twój rozwój, komfort i pewność za kierownicą, byś mógł bezpiecznie poruszać się po drogach."
        />
        {isDesktop && (
          <img src={images.teamImg} alt="Zespół instruktorów szkoły jazdy" />
        )}
      </ContentWrapper>
      <ContentWrapper>
        {isDesktop ? <DesktopTeam /> : <MobileTeam />}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Team;
