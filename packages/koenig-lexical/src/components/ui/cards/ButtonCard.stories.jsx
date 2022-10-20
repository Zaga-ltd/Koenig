import React from 'react';
import {ButtonCard} from './ButtonCard';
import {CardWrapper} from './../CardWrapper';

const story = {
    title: 'Cards/Button Card',
    component: ButtonCard,
    subcomponent: {CardWrapper},
    argTypes: {
        isSelected: {control: 'boolean'}
    }
};
export default story;

const Template = args => (
    <div className="w-[740px]">
        <CardWrapper {...args}>
            <ButtonCard {...args} />
        </CardWrapper>
    </div>
);

export const Empty = Template.bind({});
Empty.args = {
    isSelected: true,
    value: '',
    valuePlaceholder: 'Add button text'
};

export const Value = Template.bind({});
Value.args = {
    isSelected: true,
    value: 'Subscribe',
    valuePlaceholder: 'Add button text'
};

