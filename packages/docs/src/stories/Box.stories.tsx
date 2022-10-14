import { Box, BoxProps } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
