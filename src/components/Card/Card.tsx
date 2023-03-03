import React from 'react';
import { Card, CardProps } from 'react-bootstrap';
import { Link } from "react-router-dom";



interface TagProps {
    data: any
}
export const Tag = (prop: TagProps) => {
    const tag = prop.data
    return (
        <Link to={`${/tag/ + tag.attributes.value}`} >
            <div className="badge bg-gradient rounded-pill mb-2 me-2" style={{ 'backgroundColor': '#FF2867', }}>{tag.attributes.name}</div>
        </Link>
    )
}

