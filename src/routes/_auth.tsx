import { Outlet } from 'react-router-dom'
import { Outline } from '../components/Outline'

export default function Component() {
  return (
    <Outline title="<AuthLayout />">
      <Outlet />
    </Outline>
  )
}
