import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (component,attr) => {

    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

export const checkPropsError = (component,expectedProps) => {
    
    const propsError = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsError;
}