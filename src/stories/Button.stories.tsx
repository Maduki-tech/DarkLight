import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: "I am the primary",
  render: () => <Button kind="primary">Primary</Button>,
};
