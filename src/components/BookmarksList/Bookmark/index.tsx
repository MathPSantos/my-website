import styled from "./styles.module.scss";

interface BookmarkProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

export function Bookmark({ title, description, date, link }: BookmarkProps) {
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <a className={styled.bookmark} href={link} target="_blank">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{formatDate(date)}</span>
      </div>
    </a>
  );
}
