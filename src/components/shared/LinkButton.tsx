import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function LinkButton(props: any) {
  return (
    <Link as={ReachLink} to={props.to}>
      {props.text}
    </Link>
  );
}
