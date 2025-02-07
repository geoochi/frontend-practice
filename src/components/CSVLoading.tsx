import { useState, useEffect } from 'react'
import Papa, { ParseResult } from 'papaparse'
import csvString from '../data/CSVLoading.csv?raw'
import s from './CSVLoading.module.css'

interface Row {
  [key: string]: string
}

const CSVLoading = () => {
  const [data, setData] = useState<Row[]>([])
  const [cols, setCols] = useState<string[]>([])

  useEffect(() => {
    const loadData = async () => {
      let csvText = csvString
      if (csvText[csvText.length - 1] === '\n') {
        csvText = csvText.slice(0, -1)
      }
      const result: ParseResult<Row> = Papa.parse(csvText, { header: true })

      if (result.data && Array.isArray(result.data) && result.data.length > 0) {
        const firstRow = result.data[0] as Record<string, string>
        const tmp_cols = Object.keys(firstRow)
        setData(result.data as Row[])
        setCols(tmp_cols)
        // console.log(result.data)
        // for (let i = 0; i < tmp_cols.length; i++) {
        //   console.log(
        //     `last 3 items mean of colomn ${tmp_cols[i]} is`,
        //     result.data
        //       .slice(-3)
        //       .reduce((acc, row) => acc + Number(row[tmp_cols[i]]), 0) / 3
        //   )
        // }
      }
    }

    loadData()
  }, [])

  if (data.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <table className={s.csvTable}>
      <tbody>
        <tr>
          {cols.map(col => (
            <th key={col}>
              {col}
            </th>
          ))}
        </tr>
        {data.map((row, i) => (
          <tr key={i}>
            {cols.map((col, j) => (
              <td key={`${i}-${j}`}>
                {row[col] !== '' ? row[col] : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CSVLoading
