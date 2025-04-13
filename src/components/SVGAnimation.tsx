import s from './SVGAnimation.module.css'

const SVGAnimation: React.FC = () => {
  return (
    <div className='flex gap-[20px]'>
      <section>
        <span>svg 1</span>
        <div className='w-[200px] h-[200px] border border-[#777]'>
          <svg viewBox='0 0 50 50'>
            <g>
              <rect x='0' y='0' width='50' height='10' fill='red' mask='url(#line)' />
              <mask id='line'>
                <line id='' x1='0' y1='0' x2='0' y2='50' stroke='white' strokeWidth='1' />
              </mask>
            </g>
          </svg>
        </div>
      </section>
      <section>
        <span>svg 2</span>
        <div className='w-[200px] h-[200px] border border-[#777]'>
          <svg viewBox='0 0 50 50'>
            <g>
              <rect x='0' y='0' width='50' height='10' fill='red' mask='url(#animated_line)' className={s.animation1} />
              <mask id='animated_line'>
                <line x1='0' y1='0' x2='0' y2='50' stroke='white' strokeWidth='1' />
              </mask>
            </g>
          </svg>
        </div>
      </section>
      <section>
        <span>svg 3</span>
        <div className='w-[200px] h-[200px] border border-[#777]'>
          <svg viewBox='0 0 50 50'>
            <g>
              <rect
                x='0'
                y='0'
                width='100%'
                height='20'
                fill='url(#line_color)'
                mask='url(#animated_line_fancy)'
                className={s.animation2}
              />
              <defs>
                <linearGradient id='line_color' x1='0' x2='0' y1='0' y2='1'>
                  <stop offset='0%' stopColor='rgba(255,0,255,0.1)' />
                  <stop offset='100%' stopColor='rgb(255,100,255)' />
                </linearGradient>
              </defs>
              <mask id='animated_line_fancy'>
                <line x1='0' y1='0' x2='0' y2='50' stroke='white' strokeWidth='2' />
              </mask>
            </g>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default SVGAnimation
