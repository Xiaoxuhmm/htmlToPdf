import React from 'react';
import { Label, Input } from 'reactstrap';


const SimpleCheckbox = ({
    value, label
}) => (
        <Label check className="ml-4">
            <Input type="checkbox" id="checkbox2" value={value} />
            <span className="ml-1">{label}</span>
        </Label>
    );

export default SimpleCheckbox;