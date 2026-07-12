import { ContentWrapper, Wrapper } from '@components/layout'
import { Card, TextBlock } from '@components/ui'

import { useMediaQuery } from '@hooks/useMediaQuery'

import { benefitsData } from '@assets/data'
import { images } from '@assets/images/images'
import { mq } from '@styles/theme.css'
import * as styles from './benefits.css'

interface BenefitsInterface {
  title: string
  text: string
}

const Benefits = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg)

  return (
    <Wrapper direction={isDesktop ? undefined : 'columnRev'} id="dlaczego-my">
      <ContentWrapper>
        {benefitsData.map(({ title, text }: BenefitsInterface, index) => (
          <Card key={index}>
            <div className={styles.cardHeaderWrapper}>
              <span className={styles.cardIndex}>#{index + 1}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <p className={styles.cardText}>{text}</p>
          </Card>
        ))}
      </ContentWrapper>
      <ContentWrapper>
        <TextBlock
          header="Dlaczego warto wybrać naszą szkołę?"
          description="W naszej szkole nauczysz się jeździć w przyjaznej atmosferze, z elastycznymi godzinami, nowoczesnymi samochodami i instruktorami, którzy pomogą Ci poczuć się pewnie za kierownicą."
        />
        <img
          src={images.beneImg}
          alt="Zdjęcie nowoczesnego samochodu używanego w kursach jazdy"
          className={styles.image}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Benefits
