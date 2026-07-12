import { Button, Card } from '@components/ui'

import { CourseInterface } from '../Courses'

import { coursesData } from '@assets/data'
import { icons } from '@assets/icons/icons'

type CourseListProps = {
  onSelect: (index: number) => void
}

export const CourseList = ({ onSelect }: CourseListProps) => (
  <>
    {coursesData.map((course: CourseInterface, index: number) => (
      <Card variant="centered" key={index}>
        <img
          src={icons.carIco}
          alt={`Ikona samochodu dla ${course.title}`}
          width={90}
        />
        <h3>{course.title}</h3>
        <Button
          label="Więcej"
          onClick={() => onSelect(index)}
          aria-label={`Dowiedz się więcej o ${course.title}`}
        />
      </Card>
    ))}
  </>
)
