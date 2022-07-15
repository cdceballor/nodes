import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import Status from "./Status";
import { Node as NodeType } from "../types/Node";
import { ListSubNodes } from "./ListSubNodes";

type Props = {
  node: NodeType;
  expanded: boolean;
  toggleNodeExpanded: (node: NodeType) => void;
  responseRequest: any;
};

const AccordionRoot = styled(Accordion)({
  margin: "16px 0",
  boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",

  "&:before": {
    backgroundColor: "unset",
  },
});

const AccordionSummaryContainer = styled(AccordionSummary)({
  padding: "0 24px",
  "& .MuiAccordionSummary-content": {
    margin: "10px 0 !important", // Avoid change of sizing on expanded
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: colors.faded,
  },
});

const BoxSummaryContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingRight: 20,
});

const TypographyHeading = styled(Typography)({
  fontSize: 17,
  display: "block",
  color: colors.text,
  lineHeight: 1.5,
});

const TypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: colors.faded,
  lineHeight: 2,
}));

const TypographyError = styled(Typography) ({
  fontSize: 14,
  color: colors.text,
  lineHeight: 2,
});

const BoxError = styled(Box)({
  display: "flex",
  width: "100%",
  paddingRight: 4,
  marginBottom: 2,
  justifyContent: "center",
  borderRadius: 2,
  backgroundColor: "rgba(255, 99, 72, 0.9)",
});

const Node: React.FC<Props> = ({
  node,
  expanded,
  toggleNodeExpanded,
  responseRequest,
}) => {
  return (
    <AccordionRoot
      elevation={3}
      expanded={expanded}
      onChange={() => toggleNodeExpanded(node)}
    >
      <AccordionSummaryContainer expandIcon={<ExpandMoreIcon />}>
        <BoxSummaryContent>
          <Box>
            <TypographyHeading variant="h5">
              {node.name || "Unknown"}
            </TypographyHeading>
            <TypographySecondaryHeading variant="subtitle1">
              {node.url}
            </TypographySecondaryHeading>
          </Box>
          <Status loading={node.loading} online={node.online} />
        </BoxSummaryContent>
      </AccordionSummaryContainer>
      <AccordionDetails>
        {node.loading ? (
          <LinearProgress />
        ) : node.online ? (
          <>
            {responseRequest.map((response: any) => {
              return <ListSubNodes key={response.id} response={response} />;
            })}
          </>
        ) : (
          <BoxError >
            <TypographyError> Error </TypographyError>
          </BoxError>
        )}
      </AccordionDetails>
    </AccordionRoot>
  );
};

export default Node;
