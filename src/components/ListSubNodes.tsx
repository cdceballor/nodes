import { Box, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  response: any;
};

const BoxContent = styled(Box)({
  display: "flex",
  width: "100%",
  paddingRight: 4,
  marginBottom: 2,
  borderRadius: 2,
  backgroundColor: "rgba(0, 0, 0, 0.12)",
});

const TypographyIndex = styled(Typography)({
  display: "flex",
  position: "absolute",
  height: 16,
  fontSize: 10,
  left: 21,
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 700,
  textTransform: "uppercase",
  color: "#304FFE",
});

export const ListSubNodes: React.FC<Props> = ({ response }) => {
  return (
    <BoxContent>
      <TypographyIndex> 00{response.attributes["index"]} </TypographyIndex>
      <br />
      {response.attributes["data"]}
    </BoxContent>
  );
};
