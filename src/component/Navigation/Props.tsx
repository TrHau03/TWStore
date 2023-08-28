import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList, RootStackScreenEnum } from "../Root/RootStack"

export type ScreenProps = {
    navigation?: StackNavigationProp<RootStackParamList, RootStackScreenEnum>
}