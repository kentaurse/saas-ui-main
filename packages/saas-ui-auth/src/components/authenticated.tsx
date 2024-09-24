import { MaybeFunction, runIfFn } from '@chakra-ui/utils'
import { AuthContextValue, useAuth } from '../provider'
import React from 'react'

export interface AuthenticatedProps {
  onUnauthenticated?: () => void
  fallback?: MaybeFunction<React.ReactNode, [AuthContextValue<any>]>
  children: MaybeFunction<React.ReactNode, [AuthContextValue<any>]>
}

export const Authenticated: React.FC<AuthenticatedProps> = (props) => {
  const { children, onUnauthenticated, fallback } = props
  const auth = useAuth()

  const { isAuthenticated, isLoading, isLoggingIn } = auth

  const unauthenticated = !isAuthenticated && !isLoading && !isLoggingIn

  React.useEffect(() => {
    if (unauthenticated) {
      onUnauthenticated?.()
    }
  }, [unauthenticated])

  if (isLoading || (!isLoggingIn && !isAuthenticated)) {
    return runIfFn(fallback, auth)
  }

  return runIfFn(children, auth)
}
