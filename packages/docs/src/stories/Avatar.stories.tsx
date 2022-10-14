import { Avatar, AvatarProps } from "@tg-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/tiaguin061.png",
    alt: "Tiago Gonçalves",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: "undefined",
  },
};
