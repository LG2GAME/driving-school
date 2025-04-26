import "./ContentSection.scss";

type SectionProps = {
  children: React.ReactNode;
};

const ContentSection = ({ children }: SectionProps) => (
  <div className="content-section">{children}</div>
);

export default ContentSection;
