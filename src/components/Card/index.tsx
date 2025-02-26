import { useAppSelector } from "hooks/useRedux";
import s from "./Card.module.scss";

interface CardProps {
  authorId: number;
  created: string;
  imageUrl: string;
  locationId: number;
  name: string;
}

function Card({ name, authorId, created, imageUrl, locationId }: CardProps) {
  // const author = useGetAuthorQuery(authorId);
  // const location = useGetLocationQuery(locationId);
  const { locations, authors } = useAppSelector((state) => state.pictures);

  return (
    <div className={s.wrapper}>
      <div className={s.imgContainer}>
        <img className={s.img} src={`${imageUrl}`} alt={name} />
      </div>
      <div className={s.infoWrap}>
        <div className={s.infoContainer}>
          <div className={s.info}>
            <div className={s.title}>{name}</div>
            <div className={s.subtitle}>{created}</div>
          </div>
        </div>
        <div className={s.infoContainer}>
          <div className={s.info}>
            <div className={s.title}>
              {/* {author.isSuccess ? author.data[0]?.name : ""} */}
              {authors.find((item) => item.id === authorId)?.name || ""}
            </div>
            <div className={s.subtitle}>
              {/* {location.isSuccess ? location.data[0]?.location : ""} */}
              {locations.find((item) => item.id === locationId)?.name || ""}
            </div>
          </div>
        </div>
      </div>
      <button className={s.showBtn} aria-label="show more info" type="button">
        <svg
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M2 10C2 9.85 2.06 9.71 2.16 9.6C2.27 9.5 2.41 9.44 2.57 9.44L16.04 9.44L12.45 5.94C12.34 5.84 12.28 5.7 12.28 5.55C12.28 5.4 12.34 5.26 12.45 5.16C12.55 5.05 12.7 5 12.85 5C13 5 13.15 5.05 13.26 5.16L17.83 9.6C17.88 9.65 17.92 9.71 17.95 9.78C17.98 9.85 18 9.92 18 10C18 10.07 17.98 10.14 17.95 10.21C17.92 10.28 17.88 10.34 17.83 10.39L13.26 14.83C13.15 14.94 13 15 12.85 15C12.7 15 12.55 14.94 12.45 14.83C12.34 14.73 12.28 14.59 12.28 14.44C12.28 14.29 12.34 14.15 12.45 14.05L16.04 10.55L2.57 10.55C2.41 10.55 2.27 10.49 2.16 10.39C2.06 10.28 2 10.14 2 10Z"
            fill="#DEDEDE"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Card;
