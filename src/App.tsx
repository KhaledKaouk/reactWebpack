import './styles.css'
import IMG from './reactlogo.png'
import { ClickCounter } from './ClickCounter'
export const App = () => {
  return (
    <>
      <h1>
        Edited Testing React With Webpack {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMG} alt="React Logo" width="300" height="200" />
      <ClickCounter />
    </>
  )
}
