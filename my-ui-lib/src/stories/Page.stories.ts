import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    
    const user = userEvent.setup();
    await expect(loginButton).toBeInTheDocument();
    await user.click(loginButton);
    
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = await canvas.findByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};