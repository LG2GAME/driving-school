type TextSectionProps = {
  title: string;
  description: string;
};

const TextSection = ({ title, description }: TextSectionProps) => (
  <>
    <h2 className="header">{title}</h2>
    <p className="side-text">{description}</p>
  </>
);

export default TextSection;
