import s from "./NoMatches.module.scss";

function NoMatches({ query }: { query: string }) {
  return (
    <div className={s.noMatches_wrapper}>
      <p className={s.noMatches_title}>
        No matches for&nbsp;
        <span className={s.noMatches_title_search}>
          {query.length > 0 ? query : "your filter parameters"}
        </span>
      </p>
      <p className={s.noMatches_subtitle}>
        Please try again with a different spelling or keywords.
      </p>
    </div>
  );
}

export default NoMatches;
