import { Heading, HeadingProps } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typeography/Heading",
  component: Heading,
  args: {
    children: "Default H2 Heading",
  },
} as Meta;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão, o heading sempre será uma tag `h2`, mas podemos alterar isso com a propriedade `às`.",
      },
    },
  },
};
