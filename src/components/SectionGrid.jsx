import { Fragment } from 'react'
import s from './SectionGrid.module.css'
import citys from '../data/citys.json'

const GridItem = (props) => {
  const city = props.city
  return (
    <a className={s.gridItem}>
      <div className={s.in + ' ' + s.ul}>
        <p>{city.index}</p>
      </div>
      <div className={s.in + ' ' + s.ur}>
        <p>{city.wifi ? 'wifi' : 'no wifi'}</p>
      </div>
      <div className={s.in + ' ' + s.core}>
        <div className={s.up}>
          <p>{city.country}</p>
        </div>
        <div className={s.down}>
          <p>{city.city}</p>
        </div>
      </div>
      <div className={s.in + ' ' + s.bl}>
        <p>{city.temp} °C</p>
      </div>
      <div className={s.in + ' ' + s.bc}>
        <p>😎</p>
      </div>
      <div className={s.in + ' ' + s.br}>
        <p>{city.cost}</p>
      </div>
    </a>
  )
}

const SectionGrid = () => {
  return (
    <div className={s.app}>
      {citys.map((city, key) => (
        <Fragment key={key}>
          <GridItem city={city} />
        </Fragment>
      ))}
    </div>
  )
}

export default SectionGrid
