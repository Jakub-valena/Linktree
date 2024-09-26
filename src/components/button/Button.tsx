import {
  faFacebookF,
  faSnapchat,
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Button = (props: {
  key: Key | null | undefined;
  link: string | undefined;
  icon: string | [IconPrefix, IconName] | IconLookup;
  socialApp:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="link-btn" key={props.key}>
      <a href={props.link} className="link">
        <FontAwesomeIcon icon={props.icon} className="logo" />
        <p className="name">{props.socialApp}</p>
      </a>
    </div>
  );
};

export default Button;
