import React from 'react';
import {shallow} from 'enzyme'
import Headline from './index';
import {findByTestAttr,checkPropsError} from '../../Utils/index';

const setUp = ( props ={}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {

    describe('checking proptype',() => {
        it("should not throw a warning" ,()=> {
            let expectedProps = {
                header : "header",
                desc : "Description"
            }
    
            const propsError = checkPropsError(Headline,expectedProps);
            expect(propsError).toBeUndefined()


        })

        



    })

    describe('Have prop', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header : "Test Header",
                desc : "Description"
            }

            wrapper = setUp(props);
            return wrapper;

        })

        it('component should render',() => {
            const component = findByTestAttr(wrapper,"headlineWrapper");
            expect(component.length).toBe(1)
        })

        it('header should render',() => {
            const component = findByTestAttr(wrapper,"header");
            expect(component.length).toBe(1);
        })

        it('desc should render',() => {
            const component = findByTestAttr(wrapper,'desc');
            expect(component.length).toBe(1)
        })

        
    })

    describe('Have no Props', () => {

        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
            return wrapper

        })

        it('component should not render',() => {
            const component = findByTestAttr(wrapper,"headlineWrapper");
            expect(component.length).toBe(0)
        })

        it('header should render',() => {
            const component = findByTestAttr(wrapper,"header");
            expect(component.length).toBe(0);
        })

        it('desc should render',() => {
            const component = findByTestAttr(wrapper,'desc');
            expect(component.length).toBe(0)
        })
        
    })
    
    
    
})
