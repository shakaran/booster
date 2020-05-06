export const template = `import { Booster } from '@boostercloud/framework-core'
export {
  Booster,
  boosterEventDispatcher,
  boosterPreSignUpChecker,
  boosterServeGraphQL,
  boosterRequestAuthorizer,
  boosterNotifySubscribers,
} from '@boostercloud/framework-core'

Booster.start()
`
