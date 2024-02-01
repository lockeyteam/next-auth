/**
 * <div style={{backgroundColor: "#000", display: "flex", justifyContent: "space-between", color: "#fff", padding: 16}}>
 * <span>Built-in <b>Casdoor</b> integration.</span>
 * <a href="https://casdoor.org">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/providers/casdoor.svg" height="48" width="48"/>
 * </a>
 * </div>
 *
 * @module providers/casdoor
 */
import type { OAuthConfig, OAuthUserConfig } from "./index.js"

export interface CasdoorProfile extends Record<string, any> {
  acr: string
  address: string
  aud: string
  avatar: string
  email: string
  email_verified: boolean
  exp: number
  given_name: string
  family_name: string
  iat: number
  id: number
  iss: string
  name: string
  picture: string
  phone: string
  preferred_username: string
  sub: string
  type: string
  ver: string
  groups: string[]
}

/**
 * Add Casdoor login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/api/v1/auth/casdoor
 * ```
 *
 * #### Configuration
 *```js
 * import Auth from "@auth/core"
 * import Casdoor from "@auth/core/providers/casdoor"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [Casdoor({ clientId: CASDOOR_CLIENT_ID, clientSecret: CASDOOR_CLIENT_SECRET, issuer: CASDOOR_ISSUER })],
 * })
 * ```
 *
 * :::note
 * issuer should include the slug without a trailing slash – e.g., https://my-casdoor-domain.com/application/o/My_Slug
 * :::
 *
 * ### Resources
 *
 *  - [Casdoor OAuth documentation](https://casdoor.org/docs/how-to-connect/oauth)
 *
 * ### Notes
 *
 * By default, Auth.js assumes that the Casdoor provider is
 * based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.
 *
 * :::tip
 *
 * The Casdoor provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/casdoor.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */
export default function Casdoor<P extends CasdoorProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "casdoor",
    name: "Casdoor",
    type: "oidc",
    options,
  }
}
