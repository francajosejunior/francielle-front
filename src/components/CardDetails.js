import React from 'react'
import Header from './Header'
import { Formik } from 'formik'
import CardDetailsContainer from '../containers/CardDetailsContainer'
import { TextField, Grid, Button } from '@material-ui/core'
import Row from './Row'
import Col from './Col'

const CardDetails = ({
  card,
  itinerary,
  save,
  remove,
  getCurrentPosition,
  coordsChanges,
  navigate
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={card}
      render={({ handleChange, handleBlur, values, dirty }) => (
        <>
          <Row>
            <Col>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Numero"
                name="number"
                value={values.number || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Bairro"
                name="neighborhood"
                value={values.neighborhood || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Endereço"
                name="address"
                value={values.address || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Cidade"
                name="city"
                value={values.city || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Estado"
                name="state"
                value={values.state || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Latitude"
                name="latitude"
                value={values.latitude || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                label="Longitude"
                name="longitude"
                value={values.longitude || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <TextField
                fullWidth
                disabled
                label="Coordenadas"
                name="coordinates"
                value={
                  card.latitude ? `${card.latitude} , ${card.longitude}` : '-'
                }
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={getCurrentPosition}
              >
                Atualizar coordenadas aqui
              </Button>
            </Col>
            {(dirty || coordsChanges > 0) && (
              <Col>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={save(values)}
                >
                  Salvar
                </Button>
              </Col>
            )}
            {itinerary && card._id && (
              <Col>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={remove(values)}
                >
                  Remover
                </Button>
              </Col>
            )}
            <Col>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={navigate(values)}
              >
                Navegar
              </Button>
            </Col>
          </Row>
        </>
      )}
    />
  )
}

export default CardDetails
