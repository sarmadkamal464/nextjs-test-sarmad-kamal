import {Card, CardBody, CardHeader, Headline} from '../../index'
import React from 'react'

export interface ICardProps {
  header?: string
  obj: Object
}

export const CardJson = ({header, obj}: ICardProps) => {
  return (
    <Card>
      {header && (
        <CardHeader>
          <Headline level={3} spacer={'none'}>{header}</Headline>
        </CardHeader>
      )}

      <CardBody>
        <pre>
          {printJson(obj)}
        </pre>
      </CardBody>
    </Card>
  )
}

const printJson = (obj: object) => JSON.stringify(obj, replacerSetToJSON, 2)

const replacerSetToJSON = (_: string, value: any) =>
  typeof value === 'object' && value instanceof Set
    ? Array.from(value)
    : value
