import React, { ReactNode } from "react";
import { Text, TextStyle, Platform, TouchableOpacity } from "react-native";
import { FONTS } from "helpers/constants";
import { Category, getNextJsCategoryPath } from "helpers/wpapi";
import { withNavigation } from "helpers/trivial/react-navigation";
import Link from "./Link";

interface CategoryLinkProps {
  category: Category;
  children?: ReactNode;
  style?: TextStyle;

  // See "helpers/trivial/react-navigation"
  navigation?: any;
}

const _CategoryLink: React.ElementType<CategoryLinkProps> = ({
  category,
  children = (category && category.name) || "Uncategorized",
  style = {},
  navigation,
}: CategoryLinkProps) => {
  if (Platform.OS !== "web") {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push("categoryArchive", category);
        }}
      >
        <Text
          style={{
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <Text
      style={{
        ...FONTS.AUXILIARY,
        ...style,
      }}
    >
      {category ? (
        <Link href={getNextJsCategoryPath(category.url)} as={category.url}>
          <a title={category.name} style={{ color: "inherit" }}>
            {children}
          </a>
        </Link>
      ) : (
        children
      )}
    </Text>
  );
};

export const CategoryLink = withNavigation(_CategoryLink);
