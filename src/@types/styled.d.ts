import { defaultTheme } from "../styles/theme/defaultTheme";
import 'styled-components'


type themeType = typeof defaultTheme


declare module 'style-components'{
    export interface DefaultTheme extends themeType{}
}