import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


// 3合1，wrapper,Hoc，hook
const propTypes = {
    /** 执行动画 */
    action: PropTypes.bool,
    /** 切换的css动画的class名称 */
    toggleClass: PropTypes.string
}

const defaultProps = {
    action: false
}
/**
 * css过渡动画组件
 *
 * @visibleName Transition 过渡动画
 */

let getTransition = (show:any) => {
    return (props:any) => {
        const {
            className,
            action,
            toggleClass,
            children
        } = props
        return <div
            className={
                classnames({
                    transition: true
                })
            }
            style={
                {
                    position: 'relative',
                }
            }
        >
            <div
                className={
                    classnames({
                        'transition-wrapper': true,
                        [className]: className,
                        [toggleClass]: action && toggleClass
                    })
                }
            >
                {show}
            </div>
        </div>
    }
}

function Transition(props:any) {
    let show;
    if ( "children" in props) {
        show = props.children;
        return getTransition(show)(props)
    } else {
        let WrappedComponent = props;
        let isReactElement = WrappedComponent?.$$typeof === Symbol.for('react.element');
        show = isReactElement ? WrappedComponent : <WrappedComponent />;
        return getTransition(show)(null)
    }
}

export default Transition;
export const useAnimate = Transition;
export const withAnimate = Transition;
export const AnimateWrapper = Transition;
