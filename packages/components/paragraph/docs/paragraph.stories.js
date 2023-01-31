import React from 'react';
import { Paragraph } from '../lib/paragraph';

export default { title: 'Paragraph' };

export const primary = () => <Paragraph>Default Paragraph</Paragraph>;

export const secondary = () => (
    <div style={{ background: 'lightcoral', padding: 12 }}>
      <Paragraph variant="secondary">Secondary Paragraph</Paragraph>
    </div>
);
