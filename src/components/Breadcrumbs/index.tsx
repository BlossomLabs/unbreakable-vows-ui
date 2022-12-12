import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Circle,
  Text,
} from "@chakra-ui/react";
import { DoneIcon } from "../Icons";

type BreadcrumbsProps = {
  items: Array<{
    label: string;
    href: string;
    isComplete: boolean;
  }>;
};

type ItemNumberProps = {
  index: number;
  isActive: boolean;
  isComplete: boolean;
};

function ItemNumber({ index, isActive, isComplete }: ItemNumberProps) {
  return (
    <Circle
      bgColor={isActive ? "secondary.800" : "primary.300"}
      opacity={!isActive && !isComplete ? 0.7 : 1}
      border={isActive ? "1px solid" : "none"}
      borderColor={"primary.300"}
      color={isActive ? "primary.300" : "secondary.800"}
      size={6}
    >
      {isComplete ? <DoneIcon /> : <Text fontSize={"xs"}>{index + 1}</Text>}
    </Circle>
  );
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = window.location && window.location.pathname;
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="primary.300" />}
    >
      {items.map(({ href, label, isComplete }, i) => {
        const isCurrentPage = pathname === href;
        return (
          <BreadcrumbItem
            isCurrentPage={isCurrentPage}
            key={`breadcrumb-item-${label}`}
          >
            <ItemNumber
              index={i}
              isActive={isCurrentPage}
              isComplete={isComplete}
            />
            <BreadcrumbLink
              href={href}
              color={"primary.300"}
              pl={2}
              fontSize={"sm"}
            >
              {label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
