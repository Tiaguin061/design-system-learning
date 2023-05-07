import { Button, ButtonProps } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};
