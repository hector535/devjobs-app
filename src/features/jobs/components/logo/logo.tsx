import { ReactComponent as Blogr } from "@/assets/logos/blogr.svg";
import { ReactComponent as CoffeeRoasters } from "@/assets/logos/coffeeroasters.svg";
import { ReactComponent as Creative } from "@/assets/logos/creative.svg";
import { ReactComponent as Crowdfund } from "@/assets/logos/crowdfund.svg";
import { ReactComponent as Maker } from "@/assets/logos/maker.svg";
import { ReactComponent as Mastercraft } from "@/assets/logos/mastercraft.svg";
import { ReactComponent as OfficeLite } from "@/assets/logos/officelite.svg";
import { ReactComponent as Pod } from "@/assets/logos/pod.svg";
import { ReactComponent as Pomodoro } from "@/assets/logos/pomodoro.svg";
import { ReactComponent as Scoot } from "@/assets/logos/scoot.svg";
import { ReactComponent as TypeMaster } from "@/assets/logos/typemaster.svg";
import { ReactComponent as Vector } from "@/assets/logos/vector.svg";

import { type LogoProps } from "./logo.types";

export const Logo = (props: LogoProps) => {
  const { name, ...restProps } = props;

  switch (name) {
    case "blogr":
      return <Blogr {...restProps} />;
    case "coffeeroasters":
      return <CoffeeRoasters {...restProps} />;
    case "creative":
      return <Creative {...restProps} />;
    case "crowdfund":
      return <Crowdfund {...restProps} />;
    case "maker":
      return <Maker {...restProps} />;
    case "mastercraft":
      return <Mastercraft {...restProps} />;
    case "officelite":
      return <OfficeLite {...restProps} />;
    case "pod":
      return <Pod {...restProps} />;
    case "pomodoro":
      return <Pomodoro {...restProps} />;
    case "scoot":
      return <Scoot {...restProps} />;
    case "typemaster":
      return <TypeMaster {...restProps} />;
    case "vector":
      return <Vector {...restProps} />;
    default:
      return null;
  }
};
