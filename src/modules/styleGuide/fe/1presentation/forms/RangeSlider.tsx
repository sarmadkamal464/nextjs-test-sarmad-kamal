import React, {ReactNode, useEffect, useState} from 'react'
import {getTrackBackground, Range} from 'react-range'
import {IThumbProps, ITrackProps} from 'react-range/lib/types'


export interface IMinMax {
  min: number,
  max: number
}

export interface IRangeSliderProps {
  min: number
  max: number
  colorHighlight?: string //https://tailwindcss.com/docs/configuration#referencing-in-java-script
  colorBackground?: string
  step?: number
  onChange?: (values: IMinMax) => void
  onFinalChange?: (values: IMinMax) => void
}

export const RangeSlider = ({
                              min = 0,
                              max = 10000,
                              step = 0.1,
                              colorHighlight = '#3f83ff',
                              colorBackground = '#ccc',
                              onChange,
                              onFinalChange
                            }: IRangeSliderProps) => {

  const [values, setValues] = useState<number[]>([min, max])
  const [finalValues, setFinalValues] = useState<number[]>([min, max])

  useEffect(() => {
    setValues([min, max])
  }, [min, max])

  useEffect(() => {
    if (onChange) onChange(toNoDigits(values))
  }, [values, onChange])
  useEffect(() => {
    if (onFinalChange) onFinalChange(toNoDigits(values))
  }, [values, finalValues, onFinalChange])


    return (
    <div className={'flex justify-center flex-wrap px-5 pt-8 pb-1'}>
      {/* @ts-ignore*/}
      <Range draggableTrack min={min} max={max} step={step} values={values} onChange={setValues}
             onFinalChange={setFinalValues} renderTrack={
        ({props, children}) => (
          <Track props={props} min={min} max={max} values={values} colorHighlight={colorHighlight}
                 colorBackground={colorBackground}>
            {/* @ts-ignore*/}
            {children}
          </Track>
        )} renderThumb={
        ({index, props, isDragged}) =>
          (<Thumb index={index} key={index} props={props} isDragged={isDragged} values={values}
                  colorHighlight={colorHighlight} colorBackground={colorBackground} />)
      } />
    </div>
  )
}


interface ITrack {
  children: ReactNode
  props: ITrackProps
  min: number
  max: number
  values: number[]
  colorHighlight: string
  colorBackground: string
}


const Track = ({props, children, min, max, values, colorHighlight, colorBackground}: ITrack) => (
  <div className={'h-9 flex w-full'} style={{...props.style}} onMouseDown={props.onMouseDown}
       onTouchStart={props.onTouchStart}>
    <div className={'h-2 w-full rounded-md self-center innerTrack'} ref={props.ref}>
      {children}

      {/* @ts-ignore*/}
      <style jsx>{`
        .innerTrack {
          background: ${getTrackBackground({
            values,
            colors: [colorBackground, colorHighlight, colorBackground],
            min,
            max
          })}
        }
      `}</style>
    </div>
  </div>
)


interface IThumb {
  index: number
  props: IThumbProps
  values: number[]
  isDragged?: boolean
  colorHighlight: string
  colorBackground: string
}

const Thumb = ({index, props, values, isDragged, colorHighlight, colorBackground}: IThumb) => (
  <div className={'w-8 h-8 flex justify-center items-center bg-white shadow-md rounded-full'} {...props} >
    <div className={`absolute -top-8 p-1 text-white rounded colorHighlight`}>
      {values[index].toFixed(0)}
    </div>
    <div className={`w-1 h-4 color`} />


    {/* @ts-ignore*/}
    <style jsx>{`
      .color {
        background: ${isDragged ? colorHighlight : colorBackground};
      }

      .colorHighlight {
        background: ${colorHighlight};
      }
    `}</style>
  </div>
)

const toNoDigits = (value: number[]): IMinMax => {
  return {
    min: value[0] ? +(value[0].toFixed(0)) : 0,
    max: value[1] ? +(value[1].toFixed(0)) : 1000
  }
}
