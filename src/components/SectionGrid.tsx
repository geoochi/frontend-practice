import s from './SectionGrid.module.css'
import citys from '@/data/citys.json'

interface GridItemProps {
  city: {
    index: number
    wifi: boolean
    country: string
    city: string
    temp: number
    cost: number
  }
}

const GridItem: React.FC<GridItemProps> = ({ city }) => {
  return (
    <a className={s.gridItem}>
      <div className={`${s.in} ${s.ul}`}>
        <p>{city.index}</p>
      </div>
      <div className={`${s.in} ${s.ur}`}>
        <p>{city.wifi ? 'wifi' : 'no wifi'}</p>
      </div>
      <div className={`${s.in} ${s.core}`}>
        <div className={s.up}>
          <p>{city.country}</p>
        </div>
        <div className={s.down}>
          <p>{city.city}</p>
        </div>
      </div>
      <div className={`${s.in} ${s.bl}`}>
        <p>{city.temp} °C</p>
      </div>
      <div className={`${s.in} ${s.bc}`}>
        <p>😎</p>
      </div>
      <div className={`${s.in} ${s.br}`}>
        <p>{city.cost}</p>
      </div>
    </a>
  )
}

const SectionGrid = () => {
  return (
    <div className={s.app}>
      {citys.map((city, key) => (
        <GridItem key={key} city={city} />
      ))}
    </div>
  )
}

export default SectionGrid
