import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT_BOLD, TEXT_MED } from '../constants/TextStyling'
import { PRIMARY_COLOR } from '../constants/Colors'
import { useThemeColor } from '../hooks/useThemeColor'

type Props = {
    title: string,
    subTitle?: string
}

const TitleComp = (props: Props) => {
    const { title ,subTitle} = props;
    const {Colors}=useThemeColor();
  return (
    <View style={styles.container}>
      <Text style={[TEXT_BOLD,{color:Colors.primary,fontSize:16}]}>{title}</Text>
      {subTitle && <Text style={TEXT_MED}>{subTitle}</Text>}
    </View>
  )
}

export default TitleComp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal:2

    }
})