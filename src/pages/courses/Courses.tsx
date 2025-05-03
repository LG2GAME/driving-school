import { useCallback, useState } from "react";

import { ContentWrapper, Wrapper } from "@components/layout";
import { CourseDetails } from "./components/CourseDetails";
import { CourseList } from "./components/CourseList";
import { TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";

import { mq } from "@styles/theme.css";
import { coursesData } from "@assets/data";

export interface CourseInterface {
  title: string;
  description: string;
  list: string[];
  price: number;
}

const Courses = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const handleSelectOffer = useCallback((index: number) => {
    setSelectedOffer(index);
  }, []);
  const handleBack = useCallback(() => {
    setSelectedOffer(null);
  }, []);

  return (
    <Wrapper direction={isDesktop ? "row" : "column"} id="kursy">
      <ContentWrapper>
        <TextBlock
          header="Oferowane Kursy"
          description="Oferujemy kursy dostosowane do Twoich potrzeb – dla początkujących i tych, którzy chcą odświeżyć umiejętności, z profesjonalnymi instruktorami, elastycznymi godzinami i komfortowymi pojazdami."
        />
      </ContentWrapper>
      <ContentWrapper variant="grid">
        {selectedOffer === null ? (
          <CourseList onSelect={handleSelectOffer} />
        ) : (
          <CourseDetails
            course={coursesData[selectedOffer]}
            onBack={handleBack}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Courses;
