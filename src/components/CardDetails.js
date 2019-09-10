import React from 'react'
import Header from './Header'
import { Formik } from 'formik'
import CardDetailsContainer from '../containers/CardDetailsContainer'
import { TextField } from '@material-ui/core'

const CardDetails = ({ card, itinerary }) => {
  console.log(card)
  return (
    <Formik
      initialValues={{ ...card }}
      render={({ handleChange, handleBlur, values }) =>
        console.log({ values }) || (
          <>
            <TextField
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </>
        )
      }
    />
  )
}

export default CardDetails
