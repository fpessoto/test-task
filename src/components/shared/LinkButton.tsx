import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

interface PropTypes {
  text: string;
  to: string;
}

export default function LinkButton(props: PropTypes) {
  return (
    <Link as={ReachLink} to={props.to}>
      {props.text}
    </Link>
  );
}
