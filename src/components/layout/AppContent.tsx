import * as React from 'react';
import { Layout  } from 'antd';
import {ReactNode} from "react";
const { Content } = Layout;

interface AppContentProps {
    children : ReactNode
}

const AppContent = (props : AppContentProps ) => (<Content
    style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
    }}
>
        {props.children}
</Content>
);

export default AppContent;