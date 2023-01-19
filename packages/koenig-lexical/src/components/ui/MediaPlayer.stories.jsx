import React from 'react';

import {MediaPlayer} from './MediaPlayer';

const story = {
    title: 'Generic/Media player',
    component: MediaPlayer,
    parameters: {
        status: {
            type: 'uiReady'
        }
    }
};
export default story;

const Template = args => (
    <MediaPlayer {...args} />
);

export const Default = Template.bind({});
Default.args = {
    theme: 'dark'
};