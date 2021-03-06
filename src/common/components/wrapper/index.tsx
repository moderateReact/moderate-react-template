import React, { Component } from "react";
import "./index.scss";
/**定义Option组件*/

type CommonSearchTablePropsT = {
    [key: string]: any;
  };
class CommonWrapper extends Component<CommonSearchTablePropsT> {
    render() {
        const { children, title } = this.props;
        return (
            <div className="commonWrapper">
                {title && <div className="title">{title}</div>}
                {children}
            </div>
        );
    }
}

export default CommonWrapper;
