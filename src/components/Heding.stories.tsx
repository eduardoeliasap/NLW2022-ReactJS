import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heding',
    component: Heading,
    args: {
        children: 'Loren ipsum.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
}

export const large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CunstonComponet: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Texting</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }        
    }
}