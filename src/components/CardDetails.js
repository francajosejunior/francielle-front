import React from 'react'
import Header from './Header'
import { Formik } from 'formik'
import CardDetailsContainer from '../containers/CardDetailsContainer'
import { TextField, Grid, Button } from '@material-ui/core'

const CardDetails = ({
  card,
  itinerary,
  save,
  remove,
  getCurrentPosition,
  coordsChanges
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={card}
      render={({ handleChange, handleBlur, values, dirty }) => (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Numero"
              name="number"
              value={values.number || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bairro"
              name="neighborhood"
              value={values.neighborhood || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Endereço"
              name="address"
              value={values.address || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cidade"
              name="city"
              value={values.city || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Estado"
              name="state"
              value={values.state || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              disabled
              label="Coordenadas"
              name="coordinates"
              value={
                card.latitude ? `${card.latitude} , ${card.longitude}` : '-'
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={getCurrentPosition}
            >
              Atualizar coordenadas aqui
            </Button>
          </Grid>
          {(dirty || coordsChanges > 0) && (
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={save(values)}
              >
                Salvar
              </Button>
            </Grid>
          )}
          {itinerary && (
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={remove(values)}
              >
                Remover
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    />
  )
}

export default CardDetails
