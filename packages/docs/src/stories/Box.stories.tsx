import { Box, BoxProps, Text } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
  },
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
