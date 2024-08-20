import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const CustomeStatusBar = ({
    children,
    statusBgColor = '#242C3A',
    barStyle = 'light-content',
    bgColor = '#242C3A',
  }: any) => {
    return (
      <Fragment>
        <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
        <SafeAreaView style={{flex: 0, backgroundColor: statusBgColor}} />
        <SafeAreaView style={{flex: 1, backgroundColor: bgColor}}>
          {children}
        </SafeAreaView>
      </Fragment>
    );
  }

export default CustomeStatusBar