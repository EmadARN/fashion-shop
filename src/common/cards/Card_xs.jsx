import React, { useEffect, useState } from "react";
import { Cards_data } from "./data";
import Card_item_xs from "./widgets/card_item_xs";
import { Container } from "@mui/material";
import { ReactSmartScroller } from "react-smart-scroller";

const Card_xs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        {isClient && (
          <ReactSmartScroller vertical draggable>
            {Cards_data.map((item) => {
              return (
                <div key={item.id}>
                  <Card_item_xs item={item} />
                </div>
              );
            })}
          </ReactSmartScroller>
        )}
      </Container>
    </>
  );
};

export default Card_xs;
