import { Bookmark } from "./Bookmark";

import bookmarks from "../../../data/bookmarks.json";

import styled from "./styles.module.scss";

export function BookmarksList() {
  return (
    <div className={styled.bookmarksList}>
      {bookmarks.map((item, index) => (
        <Bookmark key={index} {...item} />
      ))}
    </div>
  );
}
