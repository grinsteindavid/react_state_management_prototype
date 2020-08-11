import React, { useMemo } from 'react';
import { Checkbox } from 'semantic-ui-react';

interface IProps {
    isChecked: boolean,
    setIsChecked: (value: boolean) => void
}

export default function TestStateRender(props: IProps) {
    const { isChecked, setIsChecked } = props

    return useMemo(() => {
        return (
            <div style={{ padding: 40 }}>
                <Checkbox
                    toggle
                    label="test state render"
                    checked={isChecked}
                    onChange={(event, { checked }) => setIsChecked(checked as boolean)}
                />
            </div>
        )
    }, [isChecked])
}