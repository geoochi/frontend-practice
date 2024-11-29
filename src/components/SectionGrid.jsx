import { Fragment } from 'react'
import s from '../assets/SectionGrid.module.css'
import citys from '../data/citys.json'

const GridItem = (props) => {
  const city = props.city
  return (
    <a className={s.gridItem}>
      <div className={s.in + ' ' + s.ul}>
        <p className={s.p}>{city.index}</p>
      </div>
      <div className={s.in + ' ' + s.ur}>
        <p className={s.p}>{city.wifi ? 'wifi' : 'no wifi'}</p>
      </div>
      <div className={s.in + ' ' + s.core}>
        <div className={s.up}>
          <p className={s.p}>{city.country}</p>
        </div>
        <div className={s.down}>
          <p className={s.p}>{city.city}</p>
        </div>
      </div>
      <div className={s.in + ' ' + s.bl}>
        <p className={s.p}>{city.temp} °C</p>
      </div>
      <div className={s.in + ' ' + s.bc}>
        <p className={s.p}>😎</p>
      </div>
      <div className={s.in + ' ' + s.br}>
        <p className={s.p}>{city.cost}</p>
      </div>
    </a>
  )
}

export default function SectionGrid() {
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
