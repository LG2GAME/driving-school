import { useCallback, useMemo, useState } from 'react'

import { ContentWrapper } from '@components/layout'

import { InstructorInterface } from '../Team'

import { instructorsData } from '@assets/data'
import * as styles from '../team.css'

const DesktopTeam = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1)

  const instructor = useMemo(
    () => instructorsData.find((instructor) => instructor.id === selectedItem),
    [selectedItem]
  )

  const handleSelect = useCallback((id: number) => {
    setSelectedItem(id)
  }, [])

  return (
    <>
      <article className={styles.teamMemberCard()}>
        {instructor && (
          <>
            <img
              src={instructor.image}
              alt=""
              aria-hidden="true"
              className={styles.cardImage()}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{instructor.name}</h3>
              <p className={styles.cardRole}>{instructor.role}</p>
              <p className={styles.cardDescription}>{instructor.description}</p>
            </div>
          </>
        )}
      </article>
      <ContentWrapper direction="row">
        {instructorsData.map(
          ({ id, image, name, role }: InstructorInterface) => (
            <button
              className={styles.teamMemberTile({
                selected: selectedItem === id
              })}
              style={{ '--tile-bg': `url(${image})` } as React.CSSProperties}
              onClick={() => handleSelect(id)}
              aria-label={`Wybierz instruktora ${name}`}
            >
              {selectedItem === id && (
                <div className={styles.tileContent}>
                  <h3 className={styles.profileName}>{name}</h3>
                  <p className={styles.profileRole}>{role}</p>
                </div>
              )}
            </button>
          )
        )}
      </ContentWrapper>
    </>
  )
}

export default DesktopTeam
