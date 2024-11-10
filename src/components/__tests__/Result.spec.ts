import { shallowMount } from '@vue/test-utils';
import Result from "@/components/Calculator/Result.vue";
import { expect, describe, it } from 'vitest'

describe('Result.vue', () => {
    const startNode = 'A';
    const targetNode = 'B';
    const path = ['A', 'B'];
    const distance = '5';

    it('renders correctly with props', () => {
        const wrapper = shallowMount(Result, {
            props: {
                path,
                distance,
                startNode,
                targetNode,
            }
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('renders the startNode and targetNode correctly', () => {
        const wrapper = shallowMount(Result, {
            props: {
                path,
                distance,
                startNode,
                targetNode,
            }
        });
        
        expect(wrapper.text()).toContain(`From Node Name: ${startNode}`);
        expect(wrapper.text()).toContain(`To Node Name: ${targetNode}`);
    });

    it('renders the path correctly', () => {
        const wrapper = shallowMount(Result, {
            props: {
                path,
                distance,
                startNode,
                targetNode,
            }
        });

        expect(wrapper.text()).toContain(`Path: ${path.join(",")}`);
    });

    it('renders the distance correctly', () => {
        const wrapper = shallowMount(Result, {
          props: {
            path,
            distance,
            startNode,
            targetNode,
          },
        });
    
        expect(wrapper.text()).toContain(`Total Distance: ${distance}`);
    });

    it('updates when props change', async () => {
        const wrapper = shallowMount(Result, {
            props: {
                path,
                distance,
                startNode,
                targetNode,
            }
        });

        await wrapper.setProps({
            path: ['A', 'B', 'F', 'E', 'D'],
            distance: '13',
            startNode: 'A',
            targetNode: 'D',
        })

        expect(wrapper.text()).toContain('From Node Name: A');
        expect(wrapper.text()).toContain('To Node Name: D');
        expect(wrapper.text()).toContain('Path: A,B,F,E,D');
        expect(wrapper.text()).toContain('Total Distance: 13');
    })
})