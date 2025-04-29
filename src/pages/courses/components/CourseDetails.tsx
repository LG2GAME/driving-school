import { CourseInterface } from "../Courses";

import * as styles from "../courses.css";
import { icons } from "@assets/icons/icons";

type CourseDetailsProps = {
  course: CourseInterface;
  onBack: () => void;
};

export const CourseDetails = ({ course, onBack }: CourseDetailsProps) => (
  <div className={styles.offerDetails}>
    <div className={styles.offerHeader}>
      <button
        className={styles.offerArrow}
        onClick={onBack}
        aria-label="Wróć do listy kursów"
      >
        <img src={icons.arrowIco} alt="" />
      </button>
      <h3 className={styles.offerTitle}>{course.title}</h3>
    </div>
    <p className={styles.offerDescription}>{course.description}</p>
    <ul className={styles.offerList}>
      {course.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className={styles.offerPrice}>Cena kursu: {course.price} zł</p>
  </div>
);
