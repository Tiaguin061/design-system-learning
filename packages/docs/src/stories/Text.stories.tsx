import { Text, TextProps } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typeography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur animi quibusdam adipisci harum optio. Ut perferendis provident inventore magnam molestias! Illo, officia quidem laboriosam eligendi ad aliquam eaque optio numquam.",
  },
} as Meta;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão, o text sempre será uma tag `p`, mas podemos alterar isso com a propriedade `às`.",
      },
    },
  },
};
