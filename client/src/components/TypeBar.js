import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup className="mt-2 ms-1 me-1">
            <ListGroup.Item 
                action onClick={() => product.setSelectedType({})}
                variant="light"
            >
                Сброс
            </ListGroup.Item>
            {product.types.map(type =>
                <ListGroup.Item 
                    action variant="pimary"
                    active={type.id === product.selectedType.id}
                    key={type.id}
                    onClick={() => product.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar