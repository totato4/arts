import React, { useState } from "react";
import { useGetPictureQuery } from "../../Redux/pictureQuery/picture";
import { Picture } from "../../Redux/pictureQuery/types";
import Toolbar from "../Toolbar";
import CardList from "../CardList";
import Card from "../Card";
import Pagination from "../Pagination";

function CardCatalog() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data, isSuccess } = useGetPictureQuery(
    `_page=${currentPage + 1}&_limit=6`,
  );

  return (
    <>
      <Toolbar />
      <CardList>
        {isSuccess &&
          data?.data.map((obj: Picture) => (
            <Card
              authorId={obj.authorId}
              created={obj.created}
              imageUrl={obj.imageUrl}
              locationId={obj.locationId}
              name={obj.name}
              key={`${obj.id}`}
            />
          ))}
      </CardList>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={data?.totalPages || 0}
      />
    </>
  );
}

export default CardCatalog;
